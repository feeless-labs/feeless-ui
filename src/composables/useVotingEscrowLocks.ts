import { computed, reactive } from 'vue';
import useGraphQuery, { subgraphs } from '@/composables/queries/useGraphQuery';
import useWeb3 from '@/services/web3/useWeb3';
import useConfig from '@/composables/useConfig';
import { bnum, isSameAddress } from '@/lib/utils';
import useVeBalLockInfoQuery from '@/composables/queries/useVeBalLockInfoQuery';
import useVotingPools from '@/composables/useVotingPools';
import { VotingPool } from '@/composables/queries/useVotingPoolsQuery';
import configs from '@/lib/config';
import { networkId } from '@/composables/useNetwork';
import useExpiredGaugesQuery from '@/composables/queries/useExpiredGaugesQuery';
import useVeBal, { isVotingTimeLocked } from '@/composables/useVeBAL';
import QUERY_KEYS from '@/constants/queryKeys';

/**
 * TYPES
 */
export type VotingEscrowLock = {
  votingEscrowID: {
    id: string;
  };
  updatedAt: number;
};

type VotingEscrowLockQueryResponse = {
  votingEscrowLocks: VotingEscrowLock[];
};

export default function useVotingEscrowLocks() {
  /**
   * COMPOSABLES
   */
  const { account } = useWeb3();
  const { networkConfig } = useConfig();
  const veBalLockInfoQuery = useVeBalLockInfoQuery();
  const { votingPools: allVotingPools, votingGaugeAddresses } =
    useVotingPools();
  const { veBalBalance } = useVeBal();

  const votingEscrowLocksQueryEnabled = computed(() => !!account.value);
  const votingEscrowLocksQuery = useGraphQuery<VotingEscrowLockQueryResponse>(
    subgraphs.gauge,
    QUERY_KEYS.Gauges.VotingEscrowLocks(
      veBalLockInfoQuery.data.value?.lockedAmount
    ),
    () => ({
      __name: 'VeBalVotingEscrowLock',
      votingEscrowLocks: {
        __args: {
          where: {
            user: account.value.toLowerCase(),
            votingEscrowID:
              configs[networkId.value].addresses.veFls.toLocaleLowerCase(),
          },
        },
        votingEscrowID: {
          id: true,
        },
        updatedAt: true,
      },
    }),
    reactive({ enabled: votingEscrowLocksQueryEnabled })
  );

  /**
   * COMPUTED
   */
  const votingEscrowLocks = computed(
    () => votingEscrowLocksQuery.data.value?.votingEscrowLocks
  );

  const { data: expiredGauges } = useExpiredGaugesQuery(votingGaugeAddresses);

  //  If user has received more veBAL since they last voted, their voting power is under-utilized
  const poolsUsingUnderUtilizedVotingPower = computed<VotingPool[]>(() =>
    allVotingPools.value.filter(pool => {
      return (
        // Does the gauge have user votes
        bnum(pool.userVotes).gt(0) &&
        // Has user received veBAL since they last voted
        pool.lastUserVoteTime < lastReceivedVebal.value &&
        // Is voting currently not locked
        !isVotingTimeLocked(pool.lastUserVoteTime) &&
        // Is gauge not expired
        !expiredGauges.value?.includes(pool.gauge.address)
      );
    })
  );

  const shouldResubmitVotes = computed<boolean>(
    () =>
      // Does user have any veBAL
      bnum(veBalBalance.value).gt(0) &&
      !!poolsUsingUnderUtilizedVotingPower.value.length
  );

  // Timestamp when user has last received veBAL
  const lastReceivedVebal = computed(
    () =>
      votingEscrowLocks.value?.find(item =>
        isSameAddress(item.votingEscrowID.id, networkConfig.addresses.veFls)
      )?.updatedAt || 0
  );

  return {
    votingEscrowLocks,
    lastReceivedVebal,
    poolsUsingUnderUtilizedVotingPower,
    shouldResubmitVotes,
  };
}

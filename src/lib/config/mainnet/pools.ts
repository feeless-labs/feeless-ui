import { CSP_ISSUE_POOL_IDS } from '@/constants/pool-lists/csp-issue';
import { PoolWarning, Pools } from '@/types/pools';
import { Network } from '../types';

const pools: Pools = {
  IdsMap: {
    staBAL: '',
    veBAL: '0x0c3861100485c118f63e50d615e75dad491e19c200020000000000000000000a',
  },
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: true,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: [
    'Weighted',
    'Managed',
    'LiquidityBootstrapping',
    'ComposableStable',
  ],
  Stable: {
    AllowList: [
      '0x696466e31293dc94362f0adbfdda043dd5f3896b000000000000000000000009',
      '0x1dd3158ae7e459108710b736ad61154a1c65eb0e000000000000000000000008',
    ],
  },
  Investment: {
    AllowList: [],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0x0c3861100485c118f63e50d615e75dad491e19c200020000000000000000000a', // 80wFLS/20IOTA
      '0xff8e14b5a4be62434c7759d339a6e7c4a586ab31000200000000000000000004',
      '0x6b2b40c5c0d9d9cd4b82f05e756a4e513faa7e2f000200000000000000000005',
      '0x230fbc50a0db76f3f9e85e20907e1fe4e9b387d7000200000000000000000006',
      '0x567f9830e839e40e6d83e6aeedc4aeb433aa6b96000200000000000000000007',
      '0x9231737db8c9f43db7b5c007211c714efde54cba00020000000000000000000b',
    ],
  },

  Factories: {
    '0x14C4F1e47793e60b25083bc7d3a88B08cF7774E3': 'weightedPool',
    '0xd0ca61fe288B591A9E70fC5058297d39Cc3bE458': 'liquidityBootstrappingPool', // Mainnet LBP (zero protocol fee)
    '0x88d87fdA64837aB6323f48ce898a0648dc29789f': 'managedPool', // Mainnet Managed
    '0x880843314b08750963120A1A92028729b17bEa9f': 'composableStablePool', // ComposableStable v4
  },
  Stakable: {
    VotingGaugePools: [
      '0x0c3861100485c118f63e50d615e75dad491e19c200020000000000000000000a',
    ],
    AllowList: [
      '0x0c3861100485c118f63e50d615e75dad491e19c200020000000000000000000a', // 80wFLS/20IOTA
    ],
  },
  Metadata: {},
  Deep: [],
  BoostedApr: [],
  DisabledJoins: [],
  NewVersionAvailable: {},
  Deprecated: {},
  GaugeMigration: {},
  BrandedRedirect: {},
  ExitViaInternalBalance: [],
  Issues: {
    [PoolWarning.PoolProtocolFeeVulnWarning]: [],
    [PoolWarning.PoolOwnerVulnWarningGovernanceMigrate]: [],
    [PoolWarning.PoolOwnerVulnWarningGovernanceWithdraw]: [],
    [PoolWarning.PoolOwnerVulnWarningGovernance]: [],
    [PoolWarning.PoolOwnerVulnWarningEcosystem]: [],
    [PoolWarning.RenBTCWarning]: [],
    [PoolWarning.EulerBoostedWarning]: [],
    [PoolWarning.EulerRecoveryModeWarning]: [],
    [PoolWarning.CspPoolVulnWarning]: CSP_ISSUE_POOL_IDS[Network.MAINNET],
    [PoolWarning.FxPoolVulnWarning]: [],
  },
};

export default pools;

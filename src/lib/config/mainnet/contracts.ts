import { Contracts } from '../types';
import * as iotaevm from '@/assets/data/contracts/iotaevm.json';

const contracts: Contracts = {
  authorizer: iotaevm.Authorizer,
  vault: iotaevm.Vault,
  weightedPoolFactory: iotaevm.WeightedPoolFactory,
  balancerHelpers: iotaevm.BalancerHelpers,
  veFls: iotaevm.VotingEscrow,
  gaugeController: iotaevm.GaugeController,
  gaugeFactory: iotaevm.LiquidityGaugeFactory,
  balancerMinter: iotaevm.BalancerMinter,
  tokenAdmin: iotaevm.BalancerTokenAdmin,
  veDelegationProxy: iotaevm.VotingEscrowDelegationProxy,
  feeDistributor: iotaevm.FeeDistributor,
  faucet: '',
  multicall: iotaevm.Multicall,
  poolDataQueries: '',
  balancerRelayer: ''
};
export default contracts;

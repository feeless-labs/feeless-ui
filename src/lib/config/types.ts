import { Pools } from '@/types/pools';
import { TokenListURLMap } from '@/types/TokenList';

export type CommonTokens = {
  nativeAsset: string;
  wNativeAsset: string;
  WETH: string;
  wFLS: string;
  wDAI: string;
  FUSDT: string;
  FUSDC: string;
  wBTC: string;
  wIOTA: string;
};

export type TokenConstants = {
  Popular: {
    Symbols: string[];
  };
  Addresses: CommonTokens;
  InitialSwapTokens: {
    input: string;
    output: string;
  };
  PriceChainMap?: Record<string, string>;
  DisableInternalBalanceWithdrawals?: string[];
  DoubleApprovalRequired?: string[];
};

export interface Contracts {
  multicall: string;
  vault: string;
  poolDataQueries: string;
  gaugeClaimHelper?: string;
  balancerHelpers: string;
  balancerMinter?: string;
  lidoRelayer?: string;
  balancerRelayer: string;
  gaugeController?: string;
  feeDistributor?: string;
  veFls: string;
  veFlsProxy?: string;
  protocolFeePercentagesProvider?: string;
  weightedPoolFactory?: string;
  composableStablePoolFactory?: string;
  managedPoolFactory?: string;
  authorizer?: string;
  authorizerAdaptor?: string;
  authorizerAdaptorEntrypoint?: string;
  authorizerWithAdaptorValidation?: string;
  managedPoolAddRemoveTokenLib?: string;
  managedPoolAmmLib?: string;
  noProtocolFeeLiquidityBootstrappingPoolFactory?: string;
  nullVotingEscrow?: string;
  poolRecoveryHelper?: string;
  protocolFeesCollector?: string;
  protocolFeesWithdrawer?: string;
  queryProcessor?: string;
  votingEscrowDelegationProxy?: string;
  weightedPool2TokensFactory?: string;
  doubleEntrypointFixRelayer?: string;
  l2BalancerPseudoMinter?: string;
  l2LayerZeroBridgeForwarder?: string;
  circuitBreakerLib?: string;
  externalWeightedMath?: string;
  recoveryModeHelper?: string;
  balancerQueries?: string;
  protocolIdRegistry?: string;
  gaugeAdder?: string;
  balancerTokenAdmin?: string;
  liquidityGaugeV5?: string;
  liquidityGaugeFactory?: string;
  [key: string]: string | undefined;
}

export interface RateProviders {
  [tokenAddress: string]: {
    [providerAddress: string]: boolean;
  };
}

export interface Keys {
  infura?: string;
  alchemy?: string;
  graph?: string;
  balancerApi?: string;
}

// We don't import Network from sdk to avoid extra bundle size when loading app (while the SDK is not tree-shakable)
export enum Network {
  MAINNET = 1075,
}

export interface Config {
  key: string;
  chainId: Network;
  layerZeroChainId?: number; // https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids
  chainName: string;
  name: string;
  shortName: string;
  monorepoName?: string;
  slug: string;
  network: string;
  trustWalletNetwork?: string;
  unknown: boolean;
  visibleInUI: boolean;
  testNetwork: boolean;
  rpc: string;
  publicRpc?: string;
  ws: string;
  explorer: string;
  explorerName: string;
  subgraph: string;
  balancerApi?: string;
  poolsUrlV2: string;
  subgraphs: {
    main: string[];
    aave: string;
    gauge: string;
    blocks: string;
  };
  bridgeUrl: string;
  supportsEIP1559: boolean;
  supportsElementPools: boolean;
  supportsVeBalSync?: boolean;
  blockTime: number;
  nativeAsset: {
    name: string;
    address: string;
    symbol: string;
    decimals: number;
    deeplinkId: string;
    logoURI: string;
    minTransactionBuffer: string;
  };
  thirdParty: {
    coingecko: {
      nativeAssetId: string;
      platformId: string;
    };
    apyVision?: {
      networkName: string;
    };
  };
  addresses: Contracts;
  pools: Pools;
  tokens: TokenConstants;
  keys: Keys;
  gauges: {
    type: number;
    weight: number;
  };
  tokenlists: TokenListURLMap;
  rateProviders: Record<string, Record<string, boolean>>;
}

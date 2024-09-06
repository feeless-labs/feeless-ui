import { Config } from '../types';
import contracts from './contracts';
import pools from './pools';
import tokenlists from './tokenlists';
import tokens from './tokens';
import rateProviders from './rateProviders';

const config: Config = {
  key: '1075',
  chainId: 1075,
  chainName: 'Iota EVM',
  name: '',
  shortName: 'IOTAEVM',
  monorepoName: 'IOTAEVM',
  slug: 'iota',
  network: 'mainnet',
  trustWalletNetwork: 'iotaevm',
  unknown: false,
  visibleInUI: true,
  testNetwork: false,
  rpc: `https://iota-testnet-evm.public.blastapi.io`,
  ws: ` wss://iota-testnet-evm.public.blastapi.io`,
  explorer: 'https://explorer.evm.testnet.iotaledger.net/',
  explorerName: 'IotaExplorer',
  subgraph: 'https://subgraph.feeless.finance/subgraphs/name/feeless-labs/feeless-v2',
  poolsUrlV2: '',
  subgraphs: {
    main: ['https://subgraph.feeless.finance/subgraphs/name/feeless-labs/feeless-v2'],
    aave: '',
    gauge: 'https://subgraph.feeless.finance/subgraphs/name/feeless-labs/gauges',
    blocks: '',
  },
  bridgeUrl: '',
  supportsEIP1559: true,
  supportsElementPools: true,
  blockTime: 12,
  nativeAsset: {
    name: 'wIOTA',
    address: '0xB2E0DfC4820cc55829C71529598530E177968613',
    symbol: 'wIOTA',
    decimals: 12,
    deeplinkId: 'wiota',
    logoURI: 'tokens/iota.png',
    minTransactionBuffer: '0.05',
  },
  thirdParty: {
    coingecko: {
      nativeAssetId: 'iota',
      platformId: 'iota',
    },
    apyVision: {
      networkName: 'iotaevmtestnet',
    },
  },
  addresses: {
    ...contracts,
  },
  pools,
  tokens,
  keys: {},
  gauges: {
    type: 2,
    weight: 100,
  },
  tokenlists,
  rateProviders,
};
export default config;

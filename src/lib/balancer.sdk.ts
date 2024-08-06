import { BalancerSDK ,BalancerNetworkConfig} from '@feeless/sdk';
import { Network } from '@/lib/config/types';
import { configService } from '@/services/config/config.service';
import { ref } from 'vue';
import { Config } from '@/lib/config/types';
export function convertToBalancerNetworkConfig(
  config: Config
): BalancerNetworkConfig {
  return {
    chainId: config.chainId,
    addresses: {
      contracts: config.addresses,
      tokens: {
        wrappedNativeAsset: config.nativeAsset.address,
        wFLS: config.tokens.Addresses.wFLS,
        // Aggiungi conversioni per altri token se necessario
      },
    },
    urls: {
      subgraph: config.subgraphs.main[0],
      gaugesSubgraph: config.subgraphs.gauge,
      blockNumberSubgraph: config.subgraphs.blocks,
    },
    thirdParty: {
      coingecko: config.thirdParty.coingecko,
    },
    averageBlockTime: config.blockTime,
    pools: {
    
    },

  
  };
}

export const balancer = new BalancerSDK({
  network: Network.MAINNET,
  rpcUrl: configService.getNetworkConfig(Network.MAINNET).rpc,
});

export const hasFetchedPoolsForSor = ref(false);
export async function fetchPoolsForSor() {
  if (hasFetchedPoolsForSor.value) return;
  console.time('fetchPoolsForSor');
  await balancer.swaps.fetchPools();
  hasFetchedPoolsForSor.value = true;
  console.timeEnd('fetchPoolsForSor');
}

// if (!isTestMode()) fetchPoolsForSor();

import { Network } from '@/lib/config/types';
import { PoolType } from '@/services/pool/types';
import { GqlChain, GqlPoolType } from './generated/api-types';

export function mapApiChain(
  apiChain: GqlChain
): Network {
  switch (apiChain) {
    case GqlChain.Mainnet:
      return Network.MAINNET;
    default:
      throw new Error(`Unexpected API chain: ${apiChain}`);
  }
}
export function mapApiPoolType(apiPoolType: GqlPoolType): PoolType | null {
  switch (apiPoolType) {
    case GqlPoolType.LiquidityBootstrapping:
      return PoolType.LiquidityBootstrapping;
    case GqlPoolType.Weighted:
      return PoolType.Weighted;
    case GqlPoolType.ComposableStable: // 20 Dec 2023: API change moving from PhantomStable to ComposableStable
      return PoolType.ComposableStable; // We can change this to PoolType.ComposableStable once our partners are ok
    default:
      return null;
  }
}

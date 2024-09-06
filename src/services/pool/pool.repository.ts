import { ComputedRef } from 'vue';
import { balancerSubgraphService } from '@/services/balancer/subgraph/balancer-subgraph.service';
import { PoolDecorator } from '@/services/pool/decorators/pool.decorator';
import {
  GraphQLArgs,
  PoolRepository as SDKPoolRepository,
} from '@feeless/sdk';

import { Pool } from '@/services/pool/types';
import { TokenInfoMap } from '@/types/TokenList';

import {
  getPoolsFallbackRepository,
  PoolsFallBackFactoryConstructor,
} from '@/dependencies/PoolsFallbackRepository';

export default class PoolRepository {
  repository: PoolsFallBackFactoryConstructor;
  queryArgs: GraphQLArgs;

  constructor(private tokens: ComputedRef<TokenInfoMap>) {
    const PoolsFallbackRepository = getPoolsFallbackRepository();
    this.repository = new PoolsFallbackRepository(this.buildRepositories(), {
      timeout: 30 * 1000,
    });
    this.queryArgs = {};
  }

  public async fetch(queryArgs: GraphQLArgs): Promise<Pool> {
    this.queryArgs = queryArgs;
    const [pool] = await this.repository.fetch();
    return pool as Pool;
  }


  private initializeDecoratedSubgraphRepository() {
    return {
      fetch: async (): Promise<Pool[]> => {
        const pools = await balancerSubgraphService.pools.get(this.queryArgs);

        const poolDecorator = new PoolDecorator(pools);
        const decoratedPools = await poolDecorator.decorate(
          this.tokens.value,
          true
        );

        return decoratedPools;
      },
      get skip(): number {
        return 0;
      },
    };
  }

  private buildRepositories() {
    const repositories: SDKPoolRepository[] = [];
   
    const subgraphRepository = this.initializeDecoratedSubgraphRepository();
    repositories.push(subgraphRepository);

    return repositories;
  }
}

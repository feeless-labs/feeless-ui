import { SUPPORTED_FIAT } from '@/constants/currency';
import { MockPriceService } from './api/mockPriceService';
import { coingeckoClient } from './coingecko.client';
import config from '@/lib/config';

export const getNativeAssetId = (chainId: string): string => {
  const mapping = Object.fromEntries(
    Object.values(config).map(c => {
      return [c.chainId.toString(), c.thirdParty.coingecko.nativeAssetId];
    })
  );

  return mapping[chainId] || 'iota';
};

export const getPlatformId = (chainId: string): string => {
  const mapping = Object.fromEntries(
    Object.values(config).map(c => {
      return [c.chainId.toString(), c.thirdParty.coingecko.platformId];
    })
  );

  return mapping[chainId] || 'iota';
};

export class CoingeckoService {
  supportedFiat: string;
  prices: MockPriceService;

  constructor(
    public readonly client = coingeckoClient,
    priceServiceClass = MockPriceService
  ) {
    this.supportedFiat = SUPPORTED_FIAT.join(',');
    this.prices = new priceServiceClass();
  }
}

export const coingeckoService = new CoingeckoService();

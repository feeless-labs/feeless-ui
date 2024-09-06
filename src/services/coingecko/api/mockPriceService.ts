import { fromUnixTime, getUnixTime, startOfHour } from 'date-fns';
import { groupBy, invert, last } from 'lodash';
import { twentyFourHoursInSecs } from '@/composables/useTime';
import { TOKENS } from '@/constants/tokens';
import { getAddressFromPoolId } from '@/lib/utils';
import { HistoricalPriceResponse, HistoricalPrices } from './price.service';

export class MockPriceService {

  constructor() {
   
  }

  async getTokensHistorical(
    addresses: string[],
    days: number,
    addressesPerRequest = 1,
    aggregateBy: 'hour' | 'day' = 'day'
  ): Promise<HistoricalPrices> {
    if (addresses.length / addressesPerRequest > 10) {
      throw new Error('Troppi request per il limite di rate.');
    }

    const now = Math.floor(Date.now() / 1000);
    const end =
      aggregateBy === 'hour' ? now : now - (now % twentyFourHoursInSecs);
    const start = end - days * twentyFourHoursInSecs;

    addresses = addresses
      .map(getAddressFromPoolId)
      .map(address => this.addressMapIn(address));

    const results = addresses.map(address => this.generateMockData(start, end, aggregateBy));

    return this.parseHistoricalPrices(results, addresses, start, aggregateBy);
  }

  private parseHistoricalPrices(
    results: HistoricalPriceResponse[],
    addresses: string[],
    start: number,
    aggregateBy: 'day' | 'hour' = 'day'
  ): HistoricalPrices {
    const assetPrices = Object.fromEntries(
      addresses.map((address, index) => {
        address = this.addressMapOut(address);
        const result = results[index].prices;
        const prices: { [timestamp: string]: number } = {};

        if (aggregateBy === 'hour') {
          const pricesByHour = groupBy(result, r =>
            getUnixTime(startOfHour(fromUnixTime(r[0] / 1000)))
          );
          for (const key of Object.keys(pricesByHour)) {
            const price = (last(pricesByHour[key]) || [])[1] || 0;
            prices[Number(key) * 1000] = price;
          }
        } else if (aggregateBy === 'day') {
          for (const key in result) {
            const [timestamp, price] = result[key];
            prices[timestamp] = price;
          }
        }

        return [address, prices];
      })
    );

    const prices: HistoricalPrices = {};
    for (const asset in assetPrices) {
      const assetPrice = assetPrices[asset];
      for (const timestamp in assetPrice) {
        const price = assetPrice[timestamp];
        if (!(timestamp in prices)) {
          prices[timestamp] = [];
        }
        prices[timestamp].push(price);
      }
    }
    return prices;
  }

  private generateMockData(
    start: number,
    end: number,
    aggregateBy: 'hour' | 'day'
  ): HistoricalPriceResponse {
    const result: number[][] = [];
    const interval = aggregateBy === 'hour' ? 3600 : twentyFourHoursInSecs;

    for (let timestamp = start; timestamp <= end; timestamp += interval) {
      const price = this.randomPrice(); // Genera un prezzo casuale
      result.push([timestamp * 1000, price]);
    }

    return {
      market_caps: result,
      prices: result,
      total_volumes: result,
    };
  }

  private randomPrice(): number {
    return Math.random() * 100; // Genera un prezzo casuale tra 0 e 100
  }

  public addressMapIn(address: string): string {
    // Mappa indirizzo a mainnet address se la rete è testnet (mock logic)
    const addressMap = TOKENS?.PriceChainMap;
    if (!addressMap) return address;
    return addressMap[address.toLowerCase()] || address;
  }

  public addressMapOut(address: string): string {
    // Mappa mainnet address a testnet address (mock logic)
    const addressMap = TOKENS?.PriceChainMap;
    if (!addressMap) return address;
    return invert(addressMap)[address.toLowerCase()] || address;
  }
}
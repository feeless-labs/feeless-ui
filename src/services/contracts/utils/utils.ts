import { configService } from '../../config/config.service';
import { BigNumber } from '@ethersproject/bignumber';
const MAX_VALID_TO_EPOCH = BigNumber.from('0xFFFFFFFF').toNumber(); // Max uint32 (Feb 07 2106 07:28:15 GMT+0100)
export function toErc20Address(tokenAddress: string) {
  const nativeAssetAddress = configService.network.tokens.Addresses.nativeAsset;
  if (tokenAddress.toLowerCase() === nativeAssetAddress.toLowerCase()) {
    return configService.network.tokens.Addresses.wNativeAsset;
  }
  return tokenAddress;
}
export function calculateValidTo(deadlineInMinutes: number): number {
  const now = Date.now() / 1000;
  const validTo = Math.floor(deadlineInMinutes * 60 + now);

  return Math.min(validTo, MAX_VALID_TO_EPOCH);
}
import { Config, Network } from './types';
import mainnet from './mainnet';

const config: Record<Network | number, Config> = {
  [Network.MAINNET]: mainnet,
};

export default config;

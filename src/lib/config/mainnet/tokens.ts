import { TokenConstants } from '../types';

const tokens: TokenConstants = {
  Popular: {
    Symbols: ['wIOTA', 'wDAI', 'FUSDC', 'wFLS', 'FUSDT', 'WETH', 'wBTC'],
  },
  InitialSwapTokens: {
    input: '0xB2E0DfC4820cc55829C71529598530E177968613',
    output: '0xB2E0DfC4820cc55829C71529598530E177968613',
  },
  Addresses: {
    nativeAsset: '0xB2E0DfC4820cc55829C71529598530E177968613',
    wNativeAsset: '0xB2E0DfC4820cc55829C71529598530E177968613',
    WETH: '0xd8058dA2dF3FBaBC03Ad8Ca51cAB4AAa3614B209',
    wFLS: '0x1D148Eb4C213e560a6bad71536b96AC5D6F1cDE3',
    wDAI: '0x68EA743120BaCf2C277910700116Eb4b1C0643AA',
    FUSDT: '0xCa2DBF6Ba5f3252Fd758C113A8c48D6D77406CaC',
    FUSDC: '0xc4FA42632fea08274ACDB5c0d9331285C01717Ba',
    wBTC: '0x553D8A5927FBA1c3eC05DdA667D6Cda3F5543d3a',
    wIOTA: '0xB2E0DfC4820cc55829C71529598530E177968613'
  },
  DisableInternalBalanceWithdrawals: [],
  /**
   * The approval function for these tokens doesn't allow setting a new approval
   * level if the current level is > 0. Thus they must be approved in two steps
   * first setting to 0 then setting to the required amount.
   */
  DoubleApprovalRequired: [],
};
export default tokens;


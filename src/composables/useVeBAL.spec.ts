import { mountComposableWithDefaultTokensProvider as mountComposable } from '@tests/mount-helpers';
import useVeBal from './useVeBAL';
import { networkId } from './useNetwork';
import { Network } from '@/lib/config/types';
import { initDependenciesWithDefaultMocks } from '@/dependencies/default-mocks';

initDependenciesWithDefaultMocks();

function mountUseVeBAL() {
  const { result } = mountComposable(() => useVeBal());
  return result;
}

test('veBAL is supported by default (GOERLI)', () => {
  const { isVeBalSupported } = mountUseVeBAL();
  expect(isVeBalSupported.value).toBeTrue();
});


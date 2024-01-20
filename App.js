import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import { mainnet, polygon, arbitrum } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import ConnectView from './src/components/ConnectWalletView'
import FormScreen from './src/components/FormView'
import Onboarding from './src/components/Onboarding';
const projectId = 'd8dab80ccbbfdcc48f5f3870d0df4e1d'
// const Stack = createNativeStackNavigator();

const metadata = {
  name: 'Guard Anon RN',
  description: 'Crime Prevention Tip App',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      {/* <View style = {styles.container}>
      <ConnectView />
      </View>
      <Web3Modal /> */}
      <View style= {styles.container}>
        <FormScreen />
        {/* <Onboarding /> */}
      </View>
    </WagmiConfig>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#222"
  }
})
import '@walletconnect/react-native-compat'
import { WagmiConfig } from 'wagmi'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mainnet, polygon} from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native'
import ConnectView from './src/components/ConnectWalletView'
import Onboarding from './src/components/Onboarding';
import HomeScreen from './src/components/HomeScreen';
import FormScreen from './src/components/FormView';
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

const chains = [mainnet, polygon]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig
})
const Stack = createStackNavigator();

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
  
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboarding'>
      <Stack.Screen name="onboarding" component={Onboarding}  options={{headerShown : false}}/>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown : false}}/>
      <Stack.Screen name="connect" component={ConnectView} options={{headerShown : false}}/>
      <Stack.Screen name="form" component={FormScreen} options={{headerShown : false}}/>

    </Stack.Navigator>

      </NavigationContainer>
     <Web3Modal />
    </WagmiConfig>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#222"
  }
})
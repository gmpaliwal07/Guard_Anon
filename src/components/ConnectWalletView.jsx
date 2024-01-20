import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { W3mButton } from '@web3modal/wagmi-react-native'
import { useFonts } from "expo-font";

export default function ConnectWalletView() {
  const [fontsLoaded] = useFonts({
    Elinath: require("../../assets/fonts/ELNATH.ttf"),
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <View>
      <View style = {{
         flex :1,
         backgroundColor : "#2f2f2f",
         zIndex : 1
      }}>
      <Text style = {{
        fontFamily : 'Elinath',

      }}>Guard Anon</Text>
      <Text>Discover, Connect & Engage with NFT owners through seamless XMTP-powered searches, private messaging, group chats & AirStack security based on Blockchain</Text>
      <W3mButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})
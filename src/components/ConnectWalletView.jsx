import { W3mButton } from '@web3modal/wagmi-react-native'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function ConnectView() {
  return (
    <>
    <View style = {styles.container}>
    <Text >Connect Wallet </Text>
      <W3mButton />
    </View>
    </>
  )
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center'
  }
})
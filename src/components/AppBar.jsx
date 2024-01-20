import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function AppBar() {
  return (
    <View style = {styles.container}>
        <Image  source={require('../../public/navbar.png')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
      paddingStart :"7%",
        paddingTop : "15%",
        justifyContent : "space-between",
        backgroundColor : "#222222",
        marginHorizontal : "auto",
        alignContent : "center",
        flexDirection : "row"
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function AppBar() {
  return (
    <View style = {styles.container}>
        <Image style ={{height : 20, width : 35}} source={require('../../public/WLogo.png')}/>
        <Image style ={{height : 20, width : 35}} source={require('../../public/menu.png')}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        paddingTop : "15%",
        justifyContent : "space-between",
        backgroundColor : "#222222",
        marginHorizontal : "auto",
        alignContent : "center",
        flexDirection : "row"
    }
})
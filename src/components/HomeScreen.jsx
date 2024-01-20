import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
    <>
    <View style = {{flex :1,
    backgroundColor : "#2f2f2f"}}>
     <View style = {{
      paddingTop : "40%",
      alignItems  :"center",
      backgroundColor : "#2f2f2f",
    }}>
      <Image source={(require("../../public/Group 1272628476.png"))}/>
    </View>
 <View style = {{
      borderColor : '#23a0e6',
      borderWidth :1,
      margin : "10%",
      borderRadius : 20,
    }}>
      <Text style = {{color : "#fff", backgroundColor : "#2f2f2f",   padding : 20, borderRadius : 12}}>0xDbb2DC....</Text>
    </View>
    <View style = {{
      borderTopLeftRadius : 20,
      borderTopRightRadius : 20
    }}>
    <Image source={require('../../public/instruction.png')}/>
    </View>
   
    </View>
   <View >
    <TouchableOpacity onPress={() => navigation.navigate('form')} style = {{
      backgroundColor : "#23a0e6",
      borderRadius : 20,
      borderWidth : 1,
      borderColor : "23a0e6",
      padding : 20,
      paddingTop : 10
    }}>
      <Text style ={{
        color : "#fff"
      }}>
       +   Filled a complain
      </Text>
    </TouchableOpacity>
   </View>
    </>
   
    
  )
}
import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {useFonts} from 'expo-font'
import { W3mButton } from '@web3modal/wagmi-react-native'
import { useNavigation } from '@react-navigation/native';
import AppBar from './AppBar';

export default function ConnectWallet({navigation}) {

  const [conn , setConn] = useState(false)
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
 return (
  <>
  <AppBar />
   <View style={styles.container}>
        
      <Image source={require('../../public/Group.png')} style={styles.image} />
      <View >
        <Image  source={(require('../../public/GUARD ANON.png'))}/>
        <Text style={styles.subTitle}>
        Web3-powered app for anonymous reporting, safeguarding users while combating illegal activities. Report securely        </Text>
      </View >
      <View style = {{
        paddingTop : "110%"
      }}>

<W3mButton connectStyle = {{
 borderColor : "#d9d9d9",
 height : "40%",
 width : "70%",
 flexDirection : 'row',
 justifyContent : "center",
 marginLeft : "15%",
}}

onPress={() => {
 setConn(true); // Corrected here\a
 console.log(setConn)
}}/>

      </View>

      <View style ={{
        backgroundColor : "#23a0e6",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#ffffff",
        borderRadius: 20,
        padding: 20,
        borderWidth : 1,
        borderColor : "#fff",
        height : "10%",
        width : "70%",
        justifyContent : "center",
        marginLeft  : "15%",
      }}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen") }>
 <Text style= {{
    color : "#fff",
    textAlign : "center",
    marginHorizontal : "20%"
 }}>Homepage</Text>
</TouchableOpacity >

      </View>
    </View>
  </>
   
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    padding :"10%",
    paddingTop : "20%",
    backgroundColor: '#222',
 },
 image: {
  marginTop : "30%",
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
 },
 subTitle: {
  fontFamily : "Inter",
    marginTop: 25,
    fontSize: 14,
    color: '#d9d9d9',
    textAlign: 'justify',
    fontWeight  :"900"
 },
 button: {
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
 },
 buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#yourPrimaryTextColor',
 },
});

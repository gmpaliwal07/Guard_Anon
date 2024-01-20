import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import {useFonts} from 'expo-font'
export default function Onboarding({ navigation }) {
  const animation = useRef(null);

  const [currentScreen, setCurrentScreen] = useState(0);
  const [fontsLoaded] = useFonts({
    Elinath: require("../../assets/fonts/ELNATH.ttf"),
    Inter: require("../../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const onboardingData = [
    {
      text: "Blockchain Transparency",
      description: "Ensure transparent, tamper-resistant complaint records with blockchain-based ",
     
      uri: require("../../assets/animation/search.json"), // Replace with the actual image source

    },
    {
      text: "Decentralized Security",
      description: "Empower users with Web3 for decentralized identity, enhancing control and security.",
      uri: require("../../assets/animation/security.json"),
    },
    {
      text: "Fair Judgment ",
      description: "Guarantee fair judgments through a transparent and impartial app process",
      uri: require("../../assets/animation/law.json"),
    },
  ];

  const handleNext = () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      navigation.navigate("connect");
    }
  };

  const handleBack = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../../public/bg.png")} />
      </View>

      <LottieView
        autoPlay
        ref={animation}
        source={onboardingData[currentScreen].uri}
        style={styles.animation}
      />

      <Text style={{
         fontSize: 22,
         fontWeight: "bold",
         lineHeight: 36,
         letterSpacing: 0.25,
         textAlign: "center",
         color: "#ffffff",
         fontFamily : 'Inter'
      }}>{onboardingData[currentScreen].text}</Text>
      <Text style={styles.desc}>
        {onboardingData[currentScreen].description}
      </Text>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingTop: "10%",
        }}
      >
        <View style={styles.dotsContainer}>
          {onboardingData.map((_, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dot,
                index === currentScreen ? styles.activeDot : null,
              ]}
              onPress={() => setCurrentScreen(index)}
            />
          ))}
        </View>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row", alignContent: "space-around" }}>
  <TouchableOpacity onPress={handleBack}>
    <LottieView
      autoPlay
      ref={animation}
      source={require("../../assets/animation/btn-black.json")}
      style={[styles.backbtn, { marginRight: "40%" }]}
    />
  </TouchableOpacity>
  
  <TouchableOpacity onPress={handleNext}>
    <LottieView
      autoPlay
      ref={animation}
      source={require("../../assets/animation/btn-blue.json")}
      style={[styles.btn, { marginLeft: 10 }]}
    />
  </TouchableOpacity>
</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#222323",
    paddingVertical: "60%",
  },
  imageContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    
  },
  animation: {
    width: 259,
    height: 259,
    resizeMode: "contain",
    marginBottom : "15%"
  },
  dotsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: "gray",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FFFFFF",
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 26,
    textAlign: "center",
    color: "#ffffff",
    width: "60%",
    fontFamily : 'Inter'
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4630EB",
    padding: 10,
    borderRadius: 10,
    width: "48%",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontFamily : 'Inter'
  },

  btn: {
    width: 70,
    height: 70,
  },
  backbtn: {
    width: 70,
    height: 70,
    transform: [{ rotate: "180deg" }],
  },
});

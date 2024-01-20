import React, { useState, useRef } from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from "react-native";
import LottieView from 'lottie-react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

export default function Onboarding({ navigation }) {
  const animation = useRef(null);

  const [currentScreen, setCurrentScreen] = useState(0);

  const onboardingData = [
    {
      text: "First Thing ",
      description: "first thing description is here",
      uri: require('../../assets/animation/search.json'), // Replace with the actual image source
    },
    {
      text: "Second Thing ",
      description: "second thing description is here",
      uri: require('../../assets/animation/law.json'),
    },
    {
      text: "Third Thing ",
      description: "third thing description is here",
      uri: require('../../assets/animation/security.json'),
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
        <Image source={require('../../public/backgroundImage.png')}/>
      </View>

      <LottieView
        autoPlay
        ref={animation}
        source={onboardingData[currentScreen].uri}
        style={styles.animation}
      />

      <Text style={styles.title}>{onboardingData[currentScreen].text}</Text>
      <Text style={styles.desc}>
        {onboardingData[currentScreen].description}
      </Text>
<View style = {{justifyContent :"space-between", flexDirection : "row", paddingTop : "10%"}}>
<TouchableOpacity style={styles.button} onPress={handleBack}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentScreen === onboardingData.length - 1 ? "Finish" : "Next"}
          </Text>
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
    paddingStart : "2%"
  },
  verticalImage: {
    width: 50,
    height: 100,
    resizeMode: "contain",
    marginRight: 10,
  },
  horizontalImage: {
    width: '100%',
    height: '100%',
    resizeMode : 'stretch'
  },
  animation: {
    width: 259,
    height: 259,
    resizeMode: "contain",
    marginBottom: "30%",
  },
  dotsContainer: {
    flexDirection: "row",
    marginVertical: 20,
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
  title: {
    fontSize: 22,
    fontWeight: "800",
    lineHeight: 36,
    letterSpacing: 0.25,
    textAlign: "center",
    color: "#ffffff",
  },
  desc: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 26,
    textAlign: "center",
    color: "#ffffff",
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
  },
});

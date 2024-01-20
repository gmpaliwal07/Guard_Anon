import React, { useState,useRef } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  Asset,
} from "react-native";
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
      uri: require('../../assets/animation/law.json')
      //   image: require('./images/second_image.png'), // Replace with the actual image source
    },
    {
      text: "Third Thing ",
      description: "third thing description is here",
      uri: require('../../assets/animation/security.json')
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
      <LottieView
              autoPlay
              ref={animation}

        source={onboardingData[currentScreen].uri}
        style={styles.image}
      />
      <Text style={styles.title}>{onboardingData[currentScreen].text}</Text>
      <Text style={styles.desc}>
        {onboardingData[currentScreen].description}
      </Text>
<View style = {{flex : 1, flexDirection : 'row'}}>
<TouchableOpacity > 
 <LottieView source={require('../../assets/animation/btn.json')}/>
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
      <View > 
      <TouchableOpacity > 
 <LottieView source={require('../../assets/animation/btn.json')}/>
</TouchableOpacity>
</View>
      
</View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#222323",
    paddingVertical : "60%"
  },
  image: {
    width: 259, // Adjust the width as needed
    height: 259, // Adjust the height as needed
    resizeMode: "contain",
    marginBottom : "30%"
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
});

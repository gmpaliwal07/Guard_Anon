import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Button,
  } from "react-native";
  import Axios from 'axios';
  
  
  
  import SelectDropdown from 'react-native-select-dropdown'
  import React, { useState } from "react";
  import Checkbox from "expo-checkbox";
  
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import * as ImagePicker from "expo-image-picker";
  
  
  const category = ["Rape", "Murder", "extortion", "terrorism", "Acid Attack","Bribery","Child Labour","Smuggling", "Tax Fraud"]
  export default function FormScreen() {
  
  
  
    const [text, setText] = useState("");
    const [stack, setStack] = useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [selectedTime, setSelectedTime] = useState("Select Time");
    const [proof, setProof] = useState("Show Proof");
    const [isChecked, setChecked] = useState(false);
    const [isVerifiedTip, setIsVerifiedTip] = useState(false);
    const handleStackChange = (Inputstack) => {
      setStack(Inputstack);
    };
    const handleProblemChange = (inputText) => {
      setText(inputText);
    };
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleDateConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
      const year = date.getFullYear();
      const selectedDateString = `${day}-${month}-${year}`;
      setSelectedDate(selectedDateString);
      hideDatePicker();
    };
  
    const showTimePicker = () => {
      setTimePickerVisibility(true);
    };
  
    const hideTimePicker = () => {
      setTimePickerVisibility(false);
    };
  
    const handleTimeConfirm = (date) => {
      console.warn("A time has been picked: ", date);
      // Update selectedTime state
      const selectedTimeString = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setSelectedTime(selectedTimeString);
      hideTimePicker();
    };
  
    const handleCheckBox = () => {
      setIsAccepted(!isAccepted);
    };
  
    const handleSubmit = async () => {
      console.log("handle submit");
  // Meet's Part 
      try {
        // Prepare the data to be sent in the request body
        const requestData = {
          chunk: text,  // You can modify this based on your backend expectations
        };
    
        // Make a POST request to the backend endpoint
        const response = await Axios.post('http:/localhost:3000', requestData);
        
        // Handle the response from the server
        console.log(response.data);
        // You can update your state or perform any other action based on the response
    
      } catch (error) {
        console.error("An error occurred while making the request:", error);
        // Handle the error, e.g., show an error message to the user
      }
    };
    const openImagePicker = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsMultipleSelection: true,
        quality: 0.5,
        videoQuality: 1,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.canceled) {
        setProof(result.uri); // Use result.uri to get the image URI
      }
    };
  
    const StackVerify = () => {
      console.log("implement Stack verification");
    };
  
    const AadharVerify = () => {
      console.log("implement Aadhaar verification");
    };
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>Form</Text>
          <TextInput
            style={styles.input}
            placeholder="Problem"
            multiline={true}
            onChangeText={handleProblemChange}    // Problem
            value={text}
          />
  
          {/* menu action */}
          <SelectDropdown
          defaultButtonText="Select the crime category"
      data={category}
      onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
      }}
      rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
      }}
  />
  
          <View style={styles.section}>
            <Checkbox
              style={styles.checkbox}
              value={isVerifiedTip}
              onValueChange={setIsVerifiedTip}
              color={isVerifiedTip ? "#4630EB" : undefined}
            />
            
            <Text style={styles.paragraph}>
              Have You personally witnessed the crime ?
            </Text>
          </View>
          <TouchableOpacity onPress={() => showDatePicker()}>
            <Text style={styles.input}>{selectedDate}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.input} onPress={() => showTimePicker()}>
              {selectedTime}
            </Text>
          </TouchableOpacity>
  
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimeConfirm}
            onCancel={hideTimePicker}
          />
          <View>
            <TouchableOpacity>
              <Text
                style={styles.button}
                onPress={() => {
                  console.log("implement submit request ");
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    text: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10,
      paddingTop: 20,
    },
    input: {
      color: "grey",
      borderWidth: 1,
      borderRadius: 10,
      padding: 5,
      margin: 10,
      paddingStart: 10,
    },
    image: {
      height: 250,
      width: 250,
      margin: 20,
      paddingTop: 10,
    },
    section: {
      flexDirection: "row",
      alignItems: "center",
    },
    paragraph: {
      fontSize: 15,
    },
    checkbox: {
      margin: 8,
    },
    button: {
      backgroundColor: "#4630EB",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      borderRadius: 20,
      padding: 10,
    },
  });
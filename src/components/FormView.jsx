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
  import { MaterialIcons } from '@expo/vector-icons';
  import { AntDesign } from '@expo/vector-icons';
  // Super Base section
  import * as FileSystem from 'expo-file-system';
  import * as Animatable from 'react-native-animatable';

import { createClient } from '@supabase/supabase-js'
import {supabase} from "./datatbase/client.js";


  
  // --------------------------------------------------
  import SelectDropdown from 'react-native-select-dropdown'
  import React, { useEffect, useState } from "react";
  import Checkbox from "expo-checkbox";
  
  import DateTimePickerModal from "react-native-modal-datetime-picker";
  import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import AppBar from "./AppBar";
  
  
const convertImageToBase64 = async (uri) => {
  const base64 = await FileSystem.readAsStringAsync(uri, { encoding: 'base64' });
  return base64;
};

  const category = ["Rape", "Murder", "extortion", "terrorism", "Acid Attack","Bribery","Child Labour","Smuggling", "Tax Fraud"]
  export default function FormScreen() {
  
    useEffect(()=>{
      fetchPost()
    },[])
    const title = "Category";

    const [description, setDescription] = useState("");
    const[imageBase64, setImageBase64] = useState("");
    const [stack, setStack] = useState("");
    

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState("Select Date");
    const [selectedTime, setSelectedTime] = useState("Select Time");
    const [proof, setProof] = useState("Show Proof");
    const [url_Img,setUrl_Img]=useState('')

    const [showOptions, setShowOptions] = useState(false);

    
    const [posts,setPosts]=useState([])
    const [post,setPost]=useState({Description: "",Category: "",date: "",time:"",Img:""})
    const {Description,Category,data,time, } = post

    async function fetchPost(){
      var {data} = await supabase
        .from('data_description')
        .select()
      setPosts(data)
      console.log("data: ",data)
    }

    async function createPost(){
      // console.log("create post")
      await supabase.from('posts').insert([Description,Category,data,time,Img]).single()
        

        console.log("create post")

    }



    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Extortion', 'Murder', 'Terrorism']; 
    const handlePress = () => {  ///category select
      // Show the array of options or perform any other action
      setShowOptions(!showOptions);
      console.log('Show options:', options);
    };
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
      setShowOptions(false);
      // You can perform additional actions based on the selected option
      console.log('Selected Option:', option);
    };
    const handleStackChange = (Inputstack) => {
      setStack(Inputstack);
    };
    const handleProblemChange = (inputText) => {
      setDescription(inputText);
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
  

  
    const handleSubmit = async () => {
      console.log("handle submit");
  // Meet's Part 
      try {
        // Prepare the data to be sent in the request body
        const requestData = {
          chunk: description,  // You can modify this based on your backend expectations
        };
    
        // Make a POST request to the backend endpoint
        const response = await Axios.post('http://localhost:3000', requestData);
        
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

 //----------------------------------
 async function handleSubmition() {
  try {
    console.log("handle submit");
    // Prepare the data to be sent in the request body
    const requestData = {
      Description : description,
      Category: selectedOption,
      date: selectedDate,
      time: selectedTime,
      Img: url_Img, // Update this with the actual image data if needed
    }; 

    
    console.log(requestData) 
    // data=requestData
    // Make a POST request to insert data into your Supabase database
    const { data, error } = await supabase
      .from('data_description')
      .insert([requestData]);
      console.log(error);
//--------------------------------
  //   if (error) {
  //     console.error('Error inserting data:', error);
  //     // Handle the error, e.g., show an error message to the user
  //   } else {
  //     console.log('Data inserted successfully:', data);
  //     // You can update your state or perform any other action based on the response
  //     // Clear the form fields or navigate to another screen if needed
  //     setDescription("");
  //     setSelectedOption(null);
  //     setSelectedDate("Select Date");
  //     setSelectedTime("Select Time");
  //     // setImageBase64("");
  //   }
  } catch (error) {
    console.error('An error occurred while making the request:', error);
    // Handle the error, e.g., show an error message to the user
  }
  //------------------------------------

};

// console.log(requestData) 

//   }---------------------------------------






    return (
      <>
      
         <ScrollView>
        <View style={styles.container}>
          <Image source={require('../../public/Details Form.png')}/>
          <Text style={styles.desc}>Details of the form Discriptions there you can wright any details od the app that you needed </Text>

          <TextInput
            style={styles.input}
            placeholder="Problem"
            multiline={true}
            onChangeText={text => setPost({ ...post, Description: text })}
            value={post.Description}
            placeholderTextColor={"#ffffff"}
          />
  
        


<View>
      <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row' }} onPress={handlePress}>
        <Text style={styles.input}>{selectedOption || 'Select an option'} </Text>
        <AntDesign style={{ zIndex: 2, justifyContent: 'center', alignItems: 'center', top: '5%', right: '60%' }} name="caretdown" size={15} color="#fff" />
      </TouchableOpacity>

      {/* Render the options with animation */}
      <Animatable.View
        animation={showOptions ? 'slideInDown' : 'fadeOutUp'}
        duration={500}
        style={{ display: showOptions ? 'flex' : 'none' }}
      >
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleOptionSelect(option)}>
            <Text style = {styles.input2}>{option}</Text>
          </TouchableOpacity>
        ))}
      </Animatable.View>
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

          <TextInput
            style={styles.input}
            placeholder="Area of Occurence"
            multiline = {true}
            // onChangeText={handleProblemChange}    // Problem
            // value={}
            placeholderTextColor={"#ffffff"}
          />
          <TextInput
            style={styles.input}
            placeholder="PINCODE"
  
            // onChangeText={handleProblemChange}    // Problem
            // value={description}

            onChangeText={handleProblemChange}    // Problem
            value={description}
            placeholderTextColor={"#ffffff"}
          />

          <View style = {{justifyContent : "space-between", flexDirection : "row"}}>
          <TextInput
            style={styles.input1}
            placeholder="City"
      
            // onChangeText={handleProblemChange}    // Problem
            // value={description}
            placeholderTextColor={"#ffffff"}
          />
            <TextInput
            style={styles.input1}
            placeholder="State"
          
            // onChangeText={handleProblemChange}    // Problem
            // value={description}
            placeholderTextColor={"#ffffff"}
          />
          </View>
          <Text style = {{fontSize : 16, fontWeight : "bold", color : "#878787", marginLeft : "3%", paddingTop : "3%"}}>Proof of Occurance</Text>
<TouchableOpacity>
<View>
           
            <View style = {{
              justifyContent : "center",
              flex : 1,
              alignContent : "center",
              borderWidth : 1,
              borderColor : "#d9d9d9",
              borderStyle :"dashed",
              borderRadius : 10,
              padding : "10%",
              width : "40%",
              margin : "3%",
              alignItems : "center",
            }}>
            <MaterialIcons style = {{marginBottom : "7%"}} name="add-photo-alternate" size={24} color="#d9d9d9" />
            <Text style = {{fontSize : 14, color : "#d9d9d9"}} onPress={url_Img}>Upload Proof</Text>
            </View>
<TextInput
            style={styles.input}
            placeholder="Share Proof"
            multiline = {true}
            onChangeText={handleProblemChange}    // Problem
            value={description}
            placeholderTextColor={"#ffffff"}
          />
            
          </View>
</TouchableOpacity>
        
            <TouchableOpacity>
              <Text
                style={styles.button}
                onPress={async () => {
                  try {
                    console.log("implement submit request ");
                    // {createPost()}
                    // const base64Image = await convertImageToBase64(result.uri);
                    // setImageBase64(base64Image);
                    {handleSubmition()}
                    // insert_data(description, category, selectedDate, {/*setImageBase64*/})
                    console.log("Data inserted")
                  }catch(e) {
                    console.log(e)
                  }
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      </>
   
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      paddingTop :"30%",
      backgroundColor : "#222",
      paddingVertical : "70%"
    },
    text: {
      color : "#fff",
      fontSize: 22,
      fontStyle : "normal",
      fontWeight: "700",
      margin: 10,
      lineHeight : 36,
      letterSpacing : 0.65
      
    },
    desc : {
      color: "#fff", 
      fontSize : 12,
      fontStyle  :"normal",
      fontWeight : "400",
      lineHeight : 26,
      letterSpacing : 0.09,
    },
    input: {
      marginTop : 10,
      borderRadius : 5,
      fontSize : 15,
      fontStyle : "normal",
      fontWeight : "bold",
      lineHeight : 20,
      width : "100%",
      height : "auto",
      flexShrink : 0,
      backgroundColor : "#3c3c3c",
      padding : 10,
      color : "#fff"
    },
    input2 :{
      marginTop : 10,
      borderRadius : 5,
      fontSize : 15,
      fontStyle : "normal",
      fontWeight : "bold",
      lineHeight : 20,
      width : "48%",
      height : "auto",
      flexShrink : 0,
      backgroundColor : "#3c3c3c",
      padding : 10,
      color : "#fff"
    },
    input1 : {
      marginTop : 10,
      borderRadius : 5,
      fontSize : 15,
      fontStyle : "normal",
      fontWeight : "bold",
      lineHeight : 20,
      width : "48%",
      height : "auto",
      flexShrink : 0,
      backgroundColor : "#3c3c3c",
      padding : 10,
      color : "#fff"
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
      color : "#fff",
    },
    checkbox: {
      margin: 8,
    },
    button: {
      backgroundColor: "#23a0e6",
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      margin: 10,
      color: "#ffffff",
      borderRadius: 20,
      padding: 10,
    },
  });
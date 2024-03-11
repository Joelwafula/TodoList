import {Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
  return (
    <View className="flex flex-1 flex-col p-2 bg-blue justify-start space-y-20 ">
   
        <Text className=" text-4xl mt-10 mx-4 ">Sign Up</Text>

   
    <View className=" space-y-10 mb-20">
    <TextInput
     placeholder="Enter your name"
     className="border border-black mx-5  h-16 p-5 "/>
    <TextInput 
     placeholder="Enter your Email"
    className="border border-black mx-5  h-16 p-5" />
    <TextInput 
    
    placeholder="Enter your number"
    className="border border-black mx-5  h-16 p-5" />

    </View>

    
    <View className=" items-center w-25  space-y-5">
    <Button 
    className="w-full"
    onPress={ navigation.navigate("home")}
     title='submit'/>
     <Text className="text-base">Already have an account?<TouchableOpacity 
     onPress={()=>{navigation.navigate("signin")}}>
      <Text>Login</Text>
      </TouchableOpacity> </Text>

    </View>
    
    </View>
  )
}

export default SignUp


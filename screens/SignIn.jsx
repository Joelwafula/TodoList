import {Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignIn = ({navigation}) => {
  return (
    <View className="flex flex-1 flex-col p-2 bg-blue justify-start space-y-20 ">
   
        <Text className=" text-4xl mt-10 mx-4 ">Sign In</Text>

   
    <View className=" space-y-10 mb-10">
    <TextInput
     placeholder="Enter your name"
     className="border border-black mx-5  h-16 p-5 "/>
    <TextInput 
     placeholder="Enter your Email"
    className="border border-black mx-5  h-16 p-5" />
   

    </View>

    
    <View className=" items-center w-25  space-y-5">
    <Button 
    className="w-full"
     title='submit'
     onPress={()=>{navigation.navigate("home")}}
     />
     <Text className="text-base">Don't have an account? 
     <TouchableOpacity onPress={()=>{navigation.navigate("signup")}}>
      <Text>SignUp</Text>
     </TouchableOpacity>
     </Text>

    </View>
    
    </View>
  )
}

export default SignIn


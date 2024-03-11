import {  Text, TextInput, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View className="flex flex-1 flex-col m-5">
      <Text className="mt-5 text-base">Create a task</Text>
      <TextInput className=" h-14 border mt-10 p-2 " placeholder='add a task to do' />
      
    </View>
  )
}

export default Home


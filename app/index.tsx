import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { Link } from 'expo-router'

const index = () => {
   
  return (
    <View>
      <Text>Welcome to movie app</Text>
      <Pressable className='border-2 rounded-full p-2 m-2 text-red-500 mt-50'><Link href="/(tabs)/Search" >Get Started</Link></Pressable>

    </View>
  )
}


export default index

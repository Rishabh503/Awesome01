import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './FlatCards'
import ImageCards from './ImageCards'
import ActionCard from './ActionCard'
import ContactList from './ContactList'

const AppThree = () => {
  return (
   <ScrollView>
       <View>
      <Text>AppThree</Text>
      <FlatCards/>
      <ImageCards/>
      <ActionCard/>
      <ContactList/>
    </View>
   </ScrollView>
  )
}

export default AppThree
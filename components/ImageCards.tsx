import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands'

export default function ImageCards() {
  return (
    <View>
      <Text>ImageCards</Text>
      <Text>
            Picture playing
      </Text>
      <View style={styles.container}>
            <Image 
            source={{
                uri:'https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699335/WhatsApp_Image_2025-04-27_at_01.46.00_31d81b70-removebg-preview_riv0f9.png'
            }}
            style={styles.cardImage}
            />
            <Text>
                Tamasha Bhawan
            </Text>
            <Text> New Delhi</Text>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque sint odit earum natus non debitis quos sunt soluta, ea est reprehenderit, voluptatum animi explicabo officia nihil, perspiciatis sit. Temporibus!
            </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        borderRadius:8,
        padding:10,
        margin:5,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'auto',
        height:'auto'
    },
    cardImage:{
        height:300,
        width:300,
        padding:22
    }

})
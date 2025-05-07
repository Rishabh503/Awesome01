import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink : String){
        Linking.openURL(websiteLink);
    }
  return (
    <View>
      <Text>ActionCard</Text>
      <View style={styles.container}>

        <Image 
        source={{
            uri:'https://res.cloudinary.com/dhe9p6bo0/image/upload/v1745699335/WhatsApp_Image_2025-04-27_at_01.46.00_31d81b70-removebg-preview_riv0f9.png'
        }}
        style={styles.cardImage}
        />
        <Text style={styles.heading}> Tamasha Bhawan</Text>
        <Text style={[styles.heading,styles.location]}> New Delhi</Text>
        <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit minima error similique nostrum rerum corporis tempore unde praesentium! Sunt nemo harum ab dolorem provident culpa voluptas enim placeat dicta quidem.lorem
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, nesciunt nihil officiis suscipit sit facere maiores sequi nulla dolorem eos doloremque molestiae blanditiis nostrum inventore quos dicta ea architecto ipsam.
        </Text>
        <View>
            <TouchableOpacity style={styles.button} onPress={()=>openWebsite('https://www.tamashabhawan.com/')}>
                <Text>
                Read More
                </Text>
            </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
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
    },
    button:{
        height:50,
        width:50,
        padding:10,
        margin:2,
        backgroundColor:'blue',
        borderRadius:8,
        color:'red'
    },
    heading:{
        fontSize:24,
        fontWeight:'medium',
        color:'white'
    },
    location:{
        fontWeight:'light',
        color:'black',
        fontSize:18,
    }
})
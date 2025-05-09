import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BackgroundChanger() {
    const [randomBackground, setRandomBackground] = useState("#ffffff")
    const [randomBackgroundCircle, setRandomBackgroundCircle] = useState("#ffffff")

    const generateColor=()=>{
        const hexRange="0123456789abcdef";
        let color="#";
        for(let i=0;i<6;i++){
            color+=hexRange[Math.floor(Math.random()*16)]
        }

        return color;
    }
   const generateBackColor=()=>{
    setRandomBackground(generateColor())
   }
    const generateRandomColor=()=>{
        let num=Math.floor(Math.random()*5);
        let color="#";
        for(let i=0;i<num;i++){
            color=generateColor();
        }
        console.log("color of div",color)
        setRandomBackgroundCircle(color)
    }

  return (
        <>
            <StatusBar backgroundColor={"red"}/>
            <View style={[styles.container,{backgroundColor:randomBackground}]}>
                <View style={[styles.circle,{backgroundColor:randomBackgroundCircle}]}>

                </View>
                <TouchableOpacity onPress={()=>(
                    generateBackColor() ,generateRandomColor()
                )}>
                    <View style={styles.actionBtn}>
                        <Text style={styles.actionBtnTxt}> 
                            Press Me
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    actionBtn:{
      
        borderRadius:24,
        backgroundColor:'#6A1B40'
    },
    actionBtnTxt:{
        fontSize:24,
        padding:10,
        color:"white"
    },
    circle:{
        height:100,
        width:100,
        borderRadius:100,
        margin:10,
        borderColor:'black'
    }
})
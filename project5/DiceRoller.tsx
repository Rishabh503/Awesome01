import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
// make an module for thiese png as it doesnt expet thhem directly 

import OneDice from "../assets/five.png"
import TwoDice from "../assets/six.png"
import ThreeDice from "../assets/three.png"
import FourDice from "../assets/two.png"
import FiveDice from "../assets/four.png"
import SixDice from "../assets/one.png"


// see the documentation of react native haptic feedback 
// and also restart the app like hard from the console for this 
const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

// declare a type for your props here this is basically a better way of usinf ts nothinf else u can also pass it directly than any other case 


type DiceProps = PropsWithChildren<{
    imageUrl:ImageSourcePropType
    // this image souce type is given by reactn and it ensure that its a valid image url bieng pushed too our code ntohing else  so its better to usse it
}>

// this is our dice component with a prop and we defined the prop type age uske  
const Dice=({imageUrl}:DiceProps):JSX.Element=>{
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

const DiceRoller = () => {
    const [diceImage, setDiceImage] = useState<ImageSourcePropType>(OneDice)
    const rollDiceOnTap=()=>{
        let randomNumber =Math.floor(Math.random()*6)+1;

        switch(randomNumber){
            case 1:
                setDiceImage(OneDice)
                break;
            case 2:
                setDiceImage(TwoDice)
                break;
            case 3:
                setDiceImage(ThreeDice)
                break;
            case 4:
                setDiceImage(FourDice)
                break;
            case 5:
                setDiceImage(FiveDice)
                break;
            case 5:
                setDiceImage(SixDice)
                break;

            default:
                setDiceImage(SixDice)
                break;
        }

        ReactNativeHapticFeedback.trigger("impactLight", options)
    }
  return (
    <View style={styles.container}>
        <Dice  imageUrl={diceImage}  />
      <Text style={styles.text}>DiceRoller</Text>
      <Pressable style={styles.text} onPress={rollDiceOnTap}>
       <Text style={styles.button}>
        Roll
       </Text>
      </Pressable>
    </View>
  )
}

export default DiceRoller

const styles = StyleSheet.create({
    diceImage:{
         height:100,
         width:100,
         borderRadius:12,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    text:{
        fontSize:24,
        fontWeight:400,
        margin:10,
        padding:10
    },
    button:{
        borderRadius:12,
        backgroundColor:"blue",
        paddingHorizontal:40,
        color:"white",
        paddingVertical:20
    }
})
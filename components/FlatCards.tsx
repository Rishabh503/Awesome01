import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

export default function FlatCards() {
  return (
   <View>
<Text style={styles.headingtext}>FlatCards</Text>
    <View style={styles.container} >
        <View style={[styles.boxGreen,styles.textDirection]}>
            <Text> green</Text>
        </View>
        <View style={[styles.boxRed,styles.textDirection]}>
            <Text> red</Text>
        </View>
        <View style={[styles.boxYellow,styles.textDirection]}>
            <Text> yellow</Text>
        </View>
    </View>

    {/* flex view with scrollable effect  */}
    <Text style={styles.headingtext}>FlatCards with scroll</Text>
    <ScrollView horizontal={true}> 
   
    <View style={styles.container} >
        <View style={[styles.boxGreen,styles.textDirection]}>
            <Text> green</Text>
        </View>
        <View style={[styles.boxRed,styles.textDirection]}>
            <Text> red</Text>
        </View>
        <View style={[styles.boxYellow,styles.textDirection]}>
            <Text> yellow</Text>
        </View>
        <View style={[styles.boxYellow,styles.textDirection]}>
            <Text> yellow</Text>
        </View>
        <View style={[styles.boxYellow,styles.textDirection]}>
            <Text> yellow</Text>
        </View>
    </View>
    </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        color:"white",
        paddingTop:10
    },
    container:{
        flex:1,
        flexDirection:'row',

    },
    textDirection:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
        borderRadius:8,
        padding:8,
        margin:8
    },
    boxGreen:{
        height:100,
        width:100,
        padding:2,
        margin:4,
        backgroundColor:'green'
    },
    boxRed:{
        height:100,
        width:100,
        padding:2,
        margin:2,
        backgroundColor:'red'
    }, boxYellow:{
        height:100,
        width:100,
        padding:2,
        margin:2,
        backgroundColor:'yellow'
    }

})
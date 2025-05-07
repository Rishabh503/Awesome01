import React, { JSX } from "react";

import {
    View,Text,
    Button,
    StyleSheet,
    useColorScheme 
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() ==='dark'
    return(
           <View style={styles.container}>
            <Button title='press me hard daddyy'></Button>
            <Text style={isDarkMode?styles.whiteText:styles.blackText}>heh</Text>
            <Button title='press'></Button>
            <Text>heh</Text>
            <View>
                <Text> Hi says the woeld</Text>
            </View>
           </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
       backgroundColor:"#ffffff",
       color:'red'
    },
    whiteText:{
        color:"green",
        fontSize:23
    },
    blackText:{
        color:"#ffffff"
    }
})
export default AppPro
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { cache, useState } from 'react'


import * as Yup from 'yup'
import { Formik } from 'formik'
import { BouncyCheckboxHandle,BouncyCheckboxProps } from 'react-native-bouncy-checkbox'
const PasswordScehma=Yup.object().shape({
    passwordLength:Yup.number()
    .min(4,'Should be min of 4 characters')
    .max(16,'Should be max of 16 Characters')
    .required("length is required")
})
export default function Project3() {
    const [password,setPassword]=useState('')
    const [isPassGenerated, setIsPassGenerated] = useState(false)
    const [lowercase, setLowercase] = useState(false)
    const [uppercase, setUpperCase] = useState(false)
    const [number, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)

    const generatePasswordString=(passwordLength:number)=>{
        let characterList='';
        const lowerChars="qwertyuiopasdfghjklzxcvbnm"
        const upperChars="QWERTYUIOPASDFGHJKLZXCVBNM"
        const numbersChars='0123456789'
        const symbolsChars="!@#$%^&*()_+}:"

        if(lowercase){
            characterList+=lowerChars
        }
        if(uppercase) characterList+=upperChars
        if(number) characterList+=numbersChars
        if(symbols) characterList+=symbolsChars

        const passwordResult=createPassword(characterList,passwordLength);
        setPassword(passwordResult);
        setIsPassGenerated(true)
    }
    const createPassword=(characters:string,passwordLength:number)=>{
         let result=''
         for(let i=0;i<passwordLength;i++){
            const charIndex=Math.round(Math.random()*characters.length)
            result+=characters.charAt(charIndex)
         }
         return result
    }

    const resetPasswordState=()=>{
        setPassword('')
        setIsPassGenerated(false)
        setLowercase(false)
        setUpperCase(false)
        setNumbers(false)
        setSymbols(false)
    }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
        <SafeAreaView>
            <View>
                 <Text>Password Generator</Text>

     <Formik
       initialValues={{ passwordLength:'' }}
      validationSchema={PasswordScehma}
     onSubmit={values=>{
        console.log(values);
        generatePasswordString(Number(values.passwordLength))
     }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
      isValid,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View>
            <Text>
                Password Generator
            </Text>
         </View>
         <View>
            <Text>Input value</Text>
            <TextInput 
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder='length value ? ex-9'
            keyboardType='numeric'
            />
         </View>
         <View></View>
         <View></View>
         <View></View>

         <View>

         <TouchableOpacity></TouchableOpacity>
         <TouchableOpacity></TouchableOpacity>
         </View>
         </>
        
       )}
            </Formik>
            </View>
         </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})
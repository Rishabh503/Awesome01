import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import * as Yup from 'yup'
import { Formik } from 'formik'
import BouncyCheckbox from "react-native-bouncy-checkbox";

const PasswordScehma = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 Characters')
    .required('length is required')
});

export default function Project3() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUpperCase] = useState(false);
  const [number, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength) => {
    let characterList = '';
    const lowerChars = 'qwertyuiopasdfghjklzxcvbnm';
    const upperChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    const numbersChars = '0123456789';
    const symbolsChars = '!@#$%^&*()_+}:';

    if (lowercase) characterList += lowerChars;
    if (uppercase) characterList += upperChars;
    if (number) characterList += numbersChars;
    if (symbols) characterList += symbolsChars;

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowercase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='handled'>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Password Generator</Text>
        </View>

        <Formik
          initialValues={{ passwordLength: '' }}
          validationSchema={PasswordScehma}
          onSubmit={(values) => {
            generatePasswordString(Number(values.passwordLength));
          }}
        >
          {({ values, touched, errors, isValid,handleChange, handleSubmit }) => (
            <>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Input Length</Text>
                {touched.passwordLength && errors.passwordLength &&(
                    <Text> {errors.passwordLength}</Text>
                )}
                <TextInput
                  style={styles.input}
                  value={values.passwordLength}
                  onChangeText={handleChange('passwordLength')}
                  placeholder='Enter length (e.g., 9)'
                  keyboardType='numeric'
                />
                {/* not by me  */}
                {errors.passwordLength && <Text style={styles.errorText}>{errors.passwordLength}</Text>}
              </View>
                    {/* this is the bouncy wwaala part 
                     */}
                 <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Inlcude LowerCase
                        </Text>
                        <BouncyCheckbox 
                        isChecked={lowercase}
                        useBuiltInState={false}
                        onPress={()=>setLowercase(!lowercase)}
                        fillColor='#FC80A5'
                        />
                </View>
                 <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                                Include UpperCase
                        </Text>
                        <BouncyCheckbox 
                        isChecked={uppercase}
                        useBuiltInState={false}
                        onPress={()=>setUpperCase(!uppercase)}
                        fillColor='#FC80A5'
                        />
                </View>
                 <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Include Numbers
                        </Text>
                        <BouncyCheckbox 
                        isChecked={number}
                        useBuiltInState={false}
                        onPress={()=>setNumbers(!number)}
                        fillColor='#FC80A5'
                        />
                </View>
                 <View style={styles.inputContainer}>
                        <Text style={styles.label}>
                            Include Symbols
                        </Text>
                        <BouncyCheckbox
                        isChecked={symbols}
                        useBuiltInState={false}
                        onPress={()=>setSymbols(!symbols)}
                        fillColor='#FC80A5'
                        />
                </View>



                            {/* do  neeche ke buttons  */}


              <View style={styles.buttonContainer}>
                <TouchableOpacity disabled={!isValid} style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Generate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetPasswordState}>
                  <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
              </View>

              {isPassGenerated && (
                <View style={styles.resultContainer}>
                  <Text style={styles.resultLabel}>Generated Password:</Text>
                  <Text selectable style={styles.result}>{password}</Text>
                </View>
              )}
            </>
          )}
        </Formik>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1e1e1e',
  },
  safeArea: {
    flex: 1,
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff6f61',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#ff6f61',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ff6f61',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#2b2b2b',
    color: '#fff',
  },
  errorText: {
    color: '#ff6f61',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    padding: 12,
    backgroundColor: '#ff6f61',
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: '#6c757d',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultContainer: {
    padding: 15,
    backgroundColor: '#2b2b2b',
    borderRadius: 8,
    elevation: 2,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ff6f61',
  },
  result: {
    fontSize: 18,
    color: '#fff',
  },
});

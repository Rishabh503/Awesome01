import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button, Switch } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi Hello</Text>
      <Button title='Press me  hard yes its working ff okk shho we can do this'/>
      <Button title='Nice it works ' color='#00000f'/>
      <Switch />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});

export default App;

import React from 'react';
import { TextInput, StyleSheet, View, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const PasswordInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.9,
    padding: 10,
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    padding: 5, paddingBottom: 10,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default PasswordInput;
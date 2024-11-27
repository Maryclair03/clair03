// PasswordRecovery.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const PasswordRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    if (email) {
      alert('Password recovery link has been sent to your email.');
      navigation.navigate('Login');
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordRecovery}>
        <Text style={styles.buttonText}>Send Recovery Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.backButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PasswordRecoveryScreen; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    color: 'black',
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
    fontSize: 16,
    elevation: 20,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 15,
  },
  backButtonText: {
    color: 'black',
    fontSize: 14,
  },
});


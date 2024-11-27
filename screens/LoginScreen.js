import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  const handleLoginPress = () => {
    alert('Login button pressed!');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('PasswordRecovery');
  };


  return (
    <View style={styles.container}>
      <View style={styles.topImagecontainer}>
        <Image source={require("..//assets/images.png")} style={styles.topImage} />
      </View>
      <View style={styles.helloContainer}>
        <Text style={styles.helloLabel}>PROFILE</Text>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInLabel}>Sign in to your Account</Text>
      </View>
      <View style={styles.emailContainer}>
        <TextInput style={styles.emailAddress} placeholder="Email Address" />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput style={styles.password} placeholder="Password" secureTextEntry={true} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPasswordPress}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topImage: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  helloLabel: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  signInLabel: {
    textAlign: 'center',
    fontSize: 13,
    color: 'grey',
  },
  emailContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 25,
    height: 40,
    elevation: 10,
  },
  emailAddress: {
    flex: 1,
    marginLeft: 15,
  },
  passwordContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 20,
    marginHorizontal: 40,
    height: 40,
    elevation: 10,
  },
  password: {
    flex: 1,
    marginLeft: 15,
  },
  buttonContainer: {
    marginHorizontal: 40,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    marginTop: 10,
    backgroundColor: 'purple',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: 'grey',
    fontSize: 14,
    textAlign: 'center',
  },
});

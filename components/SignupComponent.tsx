// SignupComponent.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupComponent = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  
  const handleSignUp = () => {
    console.log("asdadadsadasd");
    if (username.trim() === '') {
      Alert.alert('Error', 'Please fill username.');
      return;
    }
    if (firstName.trim() === '') {
      Alert.alert('Error', 'Please fill first Name.');
      return;
    }
    if (lastName.trim() === '') {
      Alert.alert('Error', 'Please fill last Name.');
      return;
    }
    if (city.trim() === '') {
      Alert.alert('Error', 'Please fill city.');
      return;
    }
    if (email.trim() === '') {
      Alert.alert('Error', 'Please fill email.');
      return;
    }
    if (password.trim() === '') {
      Alert.alert('Error', 'Please fill password.');
      return;
    }
    if (confirmPassword.trim() === '') {
      Alert.alert('Error', 'Please fill confirm Password.');
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo1.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />

      <View style={styles.nameContainer}>
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="First Name"
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={[styles.input, styles.halfInput]}
          placeholder="Last Name"
          onChangeText={(text) => setLastName(text)
          }
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="City"
        onChangeText={(text) => setCity(text)
        }
      />

      <TextInput
        style={styles.input}
        placeholder="Email ID"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  halfInput: {
    width: '50%',
  },
  button: {
    
    backgroundColor: '#3E69FE',
    padding: 15,
    borderRadius: 25,
    height: 50,
    width:200,
    alignItems: 'center',
    marginTop:20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default SignupComponent;

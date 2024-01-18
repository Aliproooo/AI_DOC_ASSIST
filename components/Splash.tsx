import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Login from './Login'; 


const Splash = () => {
  const navigation = useNavigation();
  setTimeout(() => {
    // Process the input value after the timeout
    navigation.navigate('Login');
    // You can perform other actions here
  }, 3000);

  const handleGetStarted = () => {
    
    navigation.navigate('Login'); 
  };
  
  return (
    <View>
      <Image
        source={require('../assets/logo1.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginLeft: 90,
    marginTop: 150,
  },
  button: {
    backgroundColor: '#3E69FE',
    padding: 15,
    borderRadius: 25,
    height: 50,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#EDF8FF',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
  },
});

export default Splash;

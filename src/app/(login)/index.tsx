import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, TextStyle, ViewStyle } from 'react-native';

interface LoginProps {
  navigation: any; // Update the type of navigation if possible
}

export default function Login({ navigation }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = () => {
    // Basic validation for username and password
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/undraw_Safe_re_kiil.png')} style={styles.image} />
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, usernameError ? styles.inputError : undefined]}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
        onFocus={() => setUsernameError('')}
      />
      {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
      <TextInput
        style={[styles.input, passwordError ? styles.inputError : undefined]}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
        onFocus={() => setPasswordError('')}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link href={'/(login)/register'} >
        <Text style={styles.registerText}>Don't have an account? Register here</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white' , 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  image: {
    width: '100%', // Stretch to fill the container horizontally
    height: 200,
    resizeMode: 'contain', // Adjust image size to maintain aspect ratio
    marginBottom: 20,
  },
});

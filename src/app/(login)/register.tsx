import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

interface RegisterProps {
  navigation: any;
}

export default function Register({ navigation }: RegisterProps) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleRegister = () => {
    // Basic validation for email, username, and password
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }
    if (!password.trim()) {
      setPasswordError('Password is required');
      return;
    }

    // Handle registration logic here
    console.log('Registering with:', email, username, password);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/undraw_Safe_re_kiil.png')} style={styles.image} />
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={[styles.input, emailError ? styles.inputError : undefined]}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        onFocus={() => setEmailError('')}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
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
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <Link href={'/(login)'} >
        <Text style={styles.registerText}>Already have an account? Login here</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

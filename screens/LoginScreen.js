// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { useMenu } from '../contexts/MenuContext';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const { setRole: setContextRole } = useMenu(); // Use MenuContext to set role

  const handleLogin = () => {
    if (role.toLowerCase() === 'chef') {
      setContextRole('chef');
      navigation.navigate('AddMenuItem');
    } else if (role.toLowerCase() === 'user') {
      setContextRole('user');
      navigation.navigate('Home');
    } else {
      alert('Please enter a valid role (chef or user)');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGc407qRX1v4Uz5lUF1gB71fx3X4qXN1XJMQ&s' }}
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#B0B0B0"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Role (chef/user)"
        placeholderTextColor="#B0B0B0"
        value={role}
        onChangeText={setRole}
      />

      <Button title="Login" onPress={handleLogin} color="#4A90E2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A90E2', // Blue color for the title
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#4A90E2', // Blue border color for inputs
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F7F7F7',
  },
});

export default LoginScreen;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Container} from './src/styles/index.js';
export default function Login() {
  return (
    <Container>
      <Text>Login</Text>
      <StatusBar style="auto" />
    </Container>
  );
}



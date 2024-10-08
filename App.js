import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Container} from './src/styles/index.js';
import logo from './src/assets/logo.png';
import bgBottom from './src/assets/bg-bottom-login.png';
export default function Login() {
  return (
    <Container>
      <Image source={logo} />
      <StatusBar style="auto" />
    </Container>
  );
}



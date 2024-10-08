import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Container,Button,ButtonText} from './src/styles/index.js';
import logo from './src/assets/logo.png';
import bgBottom from './src/assets/bg-bottom-login.png';
export default function Login() {
  return (
    <Container justify="flex-end">
      <Container
       justify="space-around"
        padding="70px"
         position="absolute"
      >
      <Image source={logo} />

      <Button type="info">
        <ButtonText color="light">Fazer Login com Facebook</ButtonText>
      </Button>

      <Button type="black">
        <ButtonText color="light">Fazer Login com Google</ButtonText>
      </Button>

      </Container>
      <Image source={bgBottom} />

    </Container>
  );
}



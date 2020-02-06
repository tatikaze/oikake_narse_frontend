import React from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';
import Tetris from './components/BlockT.js';
import ApiTester from './components/ApiTester.js';

export default function App() {
  return (
    <Container style={styles.fill}>
      <ApiTester style={styles.fill}/>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    ...StyleSheet.absoluteFillObject,
  }
});

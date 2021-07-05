import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';

export const InputsLogin = () => {
  return (
      <View>
          <TextInput
              placeholder="Celular, username ou email"
              style={styles.input}
            />

            <TextInput placeholder="Sua senha" style={styles.input} secureTextEntry={true}/>

      </View>
  );
} 
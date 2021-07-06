import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './style';

export const InputsLogin = () => {
  return (
      <View>
          <TextInput
              placeholder="Número de telefone, email ou nome de usuário"
              style={styles.input}
            />

            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true}/>

      </View>
  );
} 
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
// import { FontAwesome5 } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import {InputsLogin} from '../../components/Input/InputsLogin'
import Logo from '../assets/logo.png'
import LogoFacebook from '../assets/facebook.png'
import styles from './style'

export default function Login({handlePage}) {
  return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" transLucent={false} />

            <Image
              source={ Logo }
              style={styles.logo}
            />

            <InputsLogin/>

            <View style={styles.forgotContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => handlePage()} >
              <Text style={styles.loginText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookContainer}>
              <Image
                source={LogoFacebook}
                style={{width: 30, height: 30}}
              />
              <Text style={styles.facebookText}>
                Continue como Volnei Neves
              </Text>
            </TouchableOpacity>

            <View style={styles.divisor}>
              <View style={styles.divisorLine}></View>
              <Text style={{marginHorizontal: '3%'}}>OU</Text>
              <View style={styles.divisorLine}></View>
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Não possui uma conta?</Text>
              <TouchableOpacity>
                <Text style={styles.signUpButton}>Cadastre-se.</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
  );
}



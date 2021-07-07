import React from 'react';
import { KeyboardAvoidingView, Text, View, Image, TouchableOpacity, Platform, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import 'react-native-gesture-handler';
import { InputsLogin } from '../../components/Input/InputsLogin'
import LogoInstagram from '../../assets/logo.png'
import LogoFacebook from '../../assets/facebook.png'
import styles from './style'

export default function Login({ handlePage }) {
  return (
    <KeyboardAvoidingView behavior={"position"}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle='dark-content'/>

          <View style={styles.languageView}>
            <Text style={{ color: '#878787' }}>Português (Brasil)</Text>
          </View>

          <Image
            source={LogoInstagram}
            style={styles.logo}
          />

          <InputsLogin />

          <TouchableOpacity style={styles.loginButton} onPress={() => handlePage()} >
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotTextFather}>
                <Text style={styles.forgotText}>Esqueceu seus dados de login?</Text>
                <Text style={styles.forgotTextBold}> Obtenha ajuda para entrar.</Text>
              </Text>

            </TouchableOpacity>
          </View>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={styles.divisorText}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <TouchableOpacity style={styles.facebookContainer}>
            <Image
              source={LogoFacebook}
              style={{ width: 25, height: 25 }}
            />
            <Text style={styles.facebookText}>Entrar com o Facebook</Text>
          </TouchableOpacity>

          <View style={styles.divisorFooter}>
            <View style={styles.divisorLineFooter}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpTextFather}>
              <Text style={styles.signUpText}>Não tem uma conta?</Text>
              <Text style={styles.signUpButton}> Cadastre-se.</Text>
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
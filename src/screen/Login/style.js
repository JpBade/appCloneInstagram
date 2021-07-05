import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      marginTop: Platform.OS === 'android' ? '13%' : '20%',
      marginBottom: Platform.OS === 'android' ? '13%' : '15%',
    },
  
    forgotContainer: {
      width: '90%',
      alignItems: 'flex-end',
    },
  
    forgotText: {
      color: '#399fff',
    },
  
    loginButton: {
      marginTop: '5%',
      backgroundColor: '#399fff',
      width: '88%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
  
    loginText: {
      color: '#FFF',
      fontSize: 17,
    },
  
    facebookContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '15%',
    },
  
    facebookText: {
      color: '#399fff',
      paddingLeft: 8,
      fontSize: 15,
      fontWeight: 'bold',
    },
  
    divisor: {
      marginTop: '10%',
      flexDirection: 'row',
      width: '90%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    divisorLine: {
      width: '45%',
      height: 2,
      backgroundColor: '#EFEDED',
      borderRadius: 5,
    },
  
    signUpContainer: {
      flexDirection: 'row',
      marginTop: '10%',
    },
    signUpText: {
      color: '#C4c4c5',
      paddingRight: 5,
    },
  
    signUpButton: {
      color: '#399fff',
      fontWeight: 'bold',
    },
  });

  export default styles;
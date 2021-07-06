import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  languageView:{
    marginTop: "4%",
  },
  
  logo: {
    marginTop: '37%',
    marginBottom: '7%',
    width: 172,
    height: 49
  },

  forgotContainer: {
    width: '90%',
  },

  forgotTextFather:{
    textAlign: 'center',
    fontSize: 12
  },

  forgotText: {
    color: '#878787',

  },

  forgotTextBold: {
    color: '#00376b',
    fontWeight: 'bold'
  },

  loginButton: {
    backgroundColor: '#399fff',
    width: 335,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: '4%'
  },

  loginText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  },

  facebookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '6%',
  },

  facebookText: {
    color: '#0095f6',
    paddingLeft: 4,
    fontSize: 14,
    fontWeight: 'bold',
  },

  divisor: {
    marginTop: '4%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divisorLine: {
    width: '42%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },

  divisorText: {
    marginHorizontal: '3%',
    color: '#878787',
    fontWeight: 'bold',
    fontSize: 14
  },

  divisorFooter: {
    marginTop: '30%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divisorLineFooter:{
    width: '100%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },

  signUpContainer: {
    flexDirection: 'row',
    marginTop: '4%',
  },

  signUpTextFather:{
    fontSize: 12
  },

  signUpText: {
    color: '#878787',
    paddingRight: 5,
  },

  signUpButton: {
    color: '#00376b',
    fontWeight: 'bold',
  },
});

export default styles;
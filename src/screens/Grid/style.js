import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    firstContainer: {
      backgroundColor: '#fff',  //Retirar color
      flex: 1
    },
  
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      minWidth: '80%',
      borderRadius: 12,
      marginLeft: '4%',
      marginRight: '4%',
      marginTop: 5,
      marginBottom: 10,
      paddingLeft: 15,
      backgroundColor: '#efefef'
    },
  
    lupaImage: {
      width: 18,
      height: 18
    },
  
    textBar: {
      fontSize: 16,
      fontFamily: 'Roboto',
      paddingLeft: 15,
    },
  
    container: {
      flex: 1,
      justifyContent: 'center',
    },
  
    scrollView:{
      flexDirection: 'row',
      flexWrap: "wrap",
    },
  
    box: {
      flex: 1,
      minHeight: 130, // Dica do Ramon com o uso do flex.
      minWidth: 130, // 
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#fff'
    },
  
    footer: { // Aqui foi possível deixar o último view aparecendo após abrir o teclado. Lembrar para corrigir o login.
      height: 55,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#efefef',
      padding: 20,
      borderWidth: 0.5
  
    },
  
    iconsFooter: {
      width: 25,
      height: 25,
    }
  });

  export default styles;
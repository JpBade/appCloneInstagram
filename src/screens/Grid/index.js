import React from 'react';
import { View, TextInput, Image, ScrollView } from 'react-native';
import styles  from './style';

const Grid = () => (

  // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  // Fazer a requisição da API
  <View style={styles.firstContainer}>

    <View style={styles.header}>
      <Image source={require('../../assets/lupa.png')} style={styles.lupaImage}></Image>
      <TextInput placeholder="Pesquisar" style={styles.textBar} />
    </View>
    
    <View style={styles.container}>
      <ScrollView declarationRate='normal' contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__480.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895__340.png" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/06/22/08/38/siblings-817369__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/08/08/20/55/worried-girl-413690__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/11/14/05/29/children-1822704__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/08/10/03/47/guy-2617866__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/09/05/07/28/writing-923882__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2017/06/05/11/01/airport-2373727__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2015/11/15/21/31/lego-1044891__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/02/19/11/23/women-1209678__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2013/02/21/19/10/mother-84628__340.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/12/16/22/25/sunset-570881__480.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2014/05/03/00/56/summerfield-336672_960_720.jpg" }} style={styles.box} />
        <Image source={{ uri: "https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776__340.jpg" }} style={styles.box} />
      </ScrollView>
    </View>  
    
    <View style={styles.footer}>
      <Image source={require('../../assets/home.png')} style={styles.iconsFooter}></Image>
      <Image source={require('../../assets/lupa.png')} style={styles.iconsFooter}></Image>
      <Image source={require('../../assets/reels.png')} style={styles.iconsFooter}></Image>
      <Image source={require('../../assets/market.png')} style={styles.iconsFooter}></Image>
      <Image source={require('../../assets/user.png')} style={styles.iconsFooter}></Image>
    </View>

  </View>
  // </TouchableWithoutFeedback>
);

export default Grid;
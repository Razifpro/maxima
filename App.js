

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import userpic  from 'C:/Users/Digma/Desktop/TRAIN/train/src/assets/images/userpic.png' ;


const App = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cardStyle}>
         <View style={styles.mainBox}>
           <View style={styles.styleIco}> 
           <Image style={styles.iconStyle} source={userpic}/>
           </View>

            <View style={styles.titleBox}>
             <Text style={styles.nameStyle }>Laenne Graham </Text>
             <Text style={styles.phoneStyle }>Phone: 010-692-6593 * 09125</Text>
            </View>
          </View> 
            <View style={styles.hiddenBox}>
             <Text style={styles.infoTittle }>ADDRES</Text>
             <Text style={styles.infoContent }>P53198-4257, South Elvis, Hoeger Mall, Apt. 692</Text>
            <View style={styles.infoMail}> 
             <Text style={styles.infoTittle }>MAIL</Text>
             <Text style={styles.infoContent }>graham@yahoo.com</Text>
             </View>
            </View>
      </View>
    </View>
  );
};
  

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   

  },
  nameStyle: {
    fontSize: 25,
    fontWeight: '900',
    color: '#00ADD3'

  },
  cardStyle: {
    width: 363,
    height: 190,
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    
  }, 
  styleIco: {
    width: 60,
    height: 60,
    backgroundColor: '#00ADD3',
    borderRadius: 30,

  },
  
  mainBox: {
    flexDirection: 'row',
    paddingTop:20,
    paddingLeft:30,
    
  },
  titleBox: {
    paddingLeft: 25,
    justifyContent: 'center',
  },
  phoneStyle: {
    fontSize: 15,
    fontWeight: '200',
    color: '#00ADD3',

  },
  hiddenBox:{
    paddingLeft:115,
    width:300,


  },
  infoTittle:{
    fontSize: 9,
    fontWeight: '800',
    color: '#00ADD3',

  },
  infoContent: {
    fontSize: 12,
    fontWeight: '200',
    color: '#0A0A0A' ,
    },

  infoMail: {
    paddingTop: 20,
    
    

    },  
  iconStyle: {
    width: 60,
    height: 60,
    borderWidth: 5,
    backgroundColor: '#00ADD3',
    borderRadius: 30,


  }, 

  
 
});

export default App;

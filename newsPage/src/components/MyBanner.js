import React from 'react';
import {  Image, StyleSheet, Dimensions} from 'react-native';

 

const MyBanner = ({banner}) => {
  return (
   
        <Image style={styles.image} source={{uri: banner.imageUrl}} />
    
  );
};
 
const styles = StyleSheet.create({
  
  image: {
    width: Dimensions.get('window').width * 0.90,
    height: Dimensions.get('window').height / 4,
    margin: 5,
    borderRadius: 10
  }, 
});

export {MyBanner};

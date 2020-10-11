import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const NewsCard = ({news}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:  news.imageUrl}} />
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.desc}>{news.description}</Text>
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      margin: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0',
      borderRadius: 5,
      width:Dimensions.get('window').width * 0.45,
    },
    image: {
      height: Dimensions.get('window').width * 0.45,
      borderRadius: 5,
      resizeMode:'cover'
      
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 16
    },
    desc:{
        fontSize: 12
    }
  });
  
  export {NewsCard};
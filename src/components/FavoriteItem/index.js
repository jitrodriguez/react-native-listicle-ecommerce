import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {styles} from './styles';
const FavoriteItem = ({title,price,image,onPress,icon}) => {
  return (
    <View  style={styles.container}>
    <Pressable onPress={onPress} style={styles.productContainer}>
      <Image source={{uri:image}} style={styles.image}/>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
    <Pressable>
        <Image source={icon || require('../../assets/close.png')} style={styles.close}/>
      </Pressable>
    </View>
  )
};

export default React.memo(FavoriteItem);
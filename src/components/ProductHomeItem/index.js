import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import {styles} from './styles';
const ProductHomeItem = ({title,price,image,onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{uri:image}} style={styles.image}/>
      {/* //contain image */}

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  )
}

export default React.memo(ProductHomeItem);
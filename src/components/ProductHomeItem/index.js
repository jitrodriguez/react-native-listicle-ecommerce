import { Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Config from 'react-native-config';
const ProductHomeItem = ({ title, price, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image source={{ uri: `${Config.API_BASE_URL}/${image?.path}` }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price}</Text>
    </Pressable>
  );
};

export default React.memo(ProductHomeItem);

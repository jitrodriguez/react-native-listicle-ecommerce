import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Config from 'react-native-config';
const FavoriteItem = ({ title, price, image, onIconPress, onPress, icon }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.productContainer}>
        <Image source={{ uri: `${Config.API_BASE_URL}/${image?.path}` }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </Pressable>
      <Pressable onPress={onIconPress}>
        <Image source={icon || require('../../assets/close.png')} style={styles.close} />
      </Pressable>
    </View>
  );
};

export default React.memo(FavoriteItem);

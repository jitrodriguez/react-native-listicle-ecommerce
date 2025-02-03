import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { colors } from '../../utils/colors';
const CategoryBox = ({ title, image, onPress, isSelected }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={[styles.imageContainer, isSelected ? { backgroundColor: colors.black } : {}]}>
        <Image resizeMode='contain' source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={[styles.title, isSelected ? { color: colors.blue, fontWeight: 'bold' } : {}]}>{title}</Text>
    </Pressable>
  );
};

export default React.memo(CategoryBox);

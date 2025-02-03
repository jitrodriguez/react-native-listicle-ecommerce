import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { styles } from './styles';

const ListItem = ({ title, subtitle, onPress, style }) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      <Image style={styles.image} source={require('../../assets/forward.png')} />
    </Pressable>
  );
};

export default React.memo(ListItem);

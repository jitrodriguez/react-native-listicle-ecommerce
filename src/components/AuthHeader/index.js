import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from './styles';

function AuthHeader({ title, onBackPress }) {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image style={styles.image} source={require('./../../assets/auth_back.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default React.memo(AuthHeader);

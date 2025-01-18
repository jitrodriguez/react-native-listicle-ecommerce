import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

function Separator({text}) {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
}

export default React.memo(Separator);
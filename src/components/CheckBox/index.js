import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles'

function CheckBox({checked, onCheck}) {
  console.log('inside checkbox')
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image style={styles.checkIcon} source={require('./../../assets/check.png')} />
        </View>
      ) : null}
    </TouchableOpacity>
  );
}
export default React.memo(CheckBox);
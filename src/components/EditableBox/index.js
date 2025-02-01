import { View, Text, Image, Pressable, TextInput } from 'react-native'
import React from 'react'
import { styles } from './styles';

const EditableBox = ({label,onPress,style, value, onChangeText,editable}) => {
  return (
    <Pressable style={[styles.container,style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <TextInput value={value} editable={editable} onChangeText={onChangeText} style={styles.input} />
    </Pressable>
  )
}

export default React.memo(EditableBox)
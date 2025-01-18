import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

function Input({label, placeholder, isPassword}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={isPassword && !isPasswordVisible}
          placeholder={placeholder}
          style={styles.input}></TextInput>
        {isPassword && (
          <Pressable onPress={onEyePress}>
            <Image style={styles.eye} source={isPasswordVisible?require('./../../assets/eye.png'):require('./../../assets/eye_closed.png')} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

export default React.memo(Input);

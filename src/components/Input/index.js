import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

function Input({
  label,
  type,
  isPassword,
  onChangeText,
  value,
  style,
  placeholder,
  options,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPickerModalVisible, setIsPickerModalVisible] = useState(false);
  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onSelect = (option) => {
    onChangeText(option);
    setIsPickerModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'picker' ? (
        <Pressable
          style={styles.inputContainer}
          onPress={() => setIsPickerModalVisible(true)}>
          <Text style={[styles.input,
            !value?.title ? styles.placeholder : {}
            , style]}>
            {value?.title || placeholder}
          </Text>
          <Image
            style={styles.arrow}
            source={require('./../../assets/back.png')}
          />
        </Pressable>
      ) : (
        <View style={styles.inputContainer}>
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            secureTextEntry={isPassword && !isPasswordVisible}
            style={[styles.input, style]}
            {...props}></TextInput>
          {isPassword && (
            <Pressable onPress={onEyePress}>
              <Image
                style={styles.eye}
                source={
                  isPasswordVisible
                    ? require('./../../assets/eye.png')
                    : require('./../../assets/eye_closed.png')
                }
              />
            </Pressable>
          )}
        </View>
      )}

      <Modal transparent visible={isPickerModalVisible}>
        <TouchableOpacity
          onPress={(e) => {setIsPickerModalVisible(false);e.stopPropagation();}}
          style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <Text style={styles.headerTitle}>Select Options</Text>
            {
              options?.map((option, index) => {
                if(option?.id === undefined){
                  return null;
                }
                const selected = option?.id === value?.id;
                return (<TouchableOpacity
                key={index}
                style={styles.option}
                onPress={()=>onSelect(option)}>
                <Text style={[styles.optionText, selected ? styles.selectedOption : {}]}>{option.title}</Text>
              </TouchableOpacity>)
              })
            }
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

export default React.memo(Input);

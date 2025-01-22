import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = ({navigation}) => {
  console.log(navigation)
  const onSignUp = ()=>{
    navigation.navigate('SignUp')
  }
  const onSignIn = ()=>{
    navigation.navigate('SignIn')
  }
  
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('./../../../assets/splash_image.png')}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll find</Text>
        <Text style={[styles.title, styles.innerTitle]}>all you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Button title="Sign Up" onPress={onSignUp}></Button>
      </View>
      <Pressable hitSlop={20} onPress={onSignIn}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

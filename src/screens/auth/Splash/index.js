import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './styles';
import Button from '../../../components/Button';

const Splash = () => {
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
      <Button title="Sign Up"></Button>
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;

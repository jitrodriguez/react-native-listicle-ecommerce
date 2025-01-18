import React,{useState} from 'react';
import { Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button'
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignIn = () => {

  const onSignUp = ()=>{
    console.log('sign')
  }
  return (
    <ScrollView style={styles.container}>
        <AuthHeader title='Sign In' />
        <Input label='E-mail' placeholder='example@gmail.com'/>
        <Input isPassword label='Password' placeholder='********'/>
        <Button style={styles.button} title="Sign In"/>
        <Separator text='Or sign in with' />
        <GoogleLogin />
        <Pressable hitSlop={20} onPress={onSignUp}>
          <Text style={styles.footerText}>
            Don’t have an account?
            <Text style={styles.footerLink} > Sign Up</Text>
          </Text>
        </Pressable>
    </ScrollView>
  );
};

export default SignIn;

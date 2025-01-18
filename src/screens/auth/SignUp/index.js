import React,{useState} from 'react';
import { Pressable, ScrollView, Text, View} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button'
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const onSignIn = ()=>{
    console.log('sign')
  }
  return (
    <ScrollView style={styles.container}>
        <AuthHeader title='Sign Up' />
        <Input label='Name' placeholder='John Doe'/>
        <Input label='E-mail' placeholder='example@gmail.com'/>
        <Input isPassword label='Password' placeholder='********'/>
        <View style={styles.agreeRow}>
          <CheckBox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>I agree with
            <Text style={styles.agreeTextBold}>Terms </Text>
            &
            <Text style={styles.agreeTextBold}> Privacy</Text>
          </Text>
        </View>
        <Button style={styles.button} title="Sign Up"/>
        <Separator text='Or sign up with' />
        <GoogleLogin />
        <Pressable hitSlop={20} onPress={onSignIn}>
          <Text style={styles.footerText}>
            Already have an account?
            <Text style={styles.footerLink} > Sign In</Text>
          </Text>
        </Pressable>
    </ScrollView>
  );
};

export default SignUp;

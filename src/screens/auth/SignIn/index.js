import React, { useContext, useState } from 'react';
import { Alert, Pressable, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signIn } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const SignIn = ({ navigation }) => {
  const [values, setValues] = useState({});
  const { setUser } = useContext(UserContext);

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };
  const onBack = () => {
    navigation.goBack();
  };

  const onSubmit = async () => {
    if (!values?.email || !values?.password) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    const token = await signIn(values);

    setUser({ token });

    console.log('token ==> ', token);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title='Sign In' />
        <Input onChangeText={v => onChange('email', v)} label='E-mail' placeholder='example@gmail.com' />
        <Input onChangeText={v => onChange('password', v)} isPassword label='Password' placeholder='********' />
        <Button onPress={onSubmit} style={styles.button} title='Sign In' />
        <Separator text='Or sign in with' />
        <GoogleLogin />
        <Pressable hitSlop={20} onPress={onSignUp}>
          <Text style={styles.footerText}>
            Don’t have an account?
            <Text style={styles.footerLink}> Sign Up</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

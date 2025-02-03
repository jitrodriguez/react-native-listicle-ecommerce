import React, { useContext, useState } from 'react';
import { Alert, Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';
import GoogleLogin from '../../../components/GoogleLogin';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signUp } from '../../../utils/backendCalls';
import { UserContext } from '../../../../App';

const SignUp = ({ navigation }) => {
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});
  const { setUser } = useContext(UserContext);
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onSubmit = async () => {
    if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }
    if (values.password !== values.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (!checked) {
      Alert.alert('Error', 'Please agree with terms and privacy');
      return;
    }

    const token = await signUp(values);

    setUser({ token });

    console.log('token ==> ', token);
  };

  const onBack = () => {
    navigation.goBack();
  };

  const onChange = (key, value) => {
    setValues(v => ({ ...v, [key]: value }));
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader onBackPress={onBack} title='Sign Up' />
        <Input value={values.fullName} onChangeText={v => onChange('fullName', v)} label='Name' placeholder='John Doe' />
        <Input value={values.email} onChangeText={v => onChange('email', v)} label='E-mail' placeholder='example@gmail.com' />
        <Input value={values.password} onChangeText={v => onChange('password', v)} isPassword label='Password' placeholder='********' />
        <Input
          value={values.confirmPassword}
          onChangeText={v => onChange('confirmPassword', v)}
          isPassword
          label='Confirm Password'
          placeholder='********'
        />
        <View style={styles.agreeRow}>
          <CheckBox checked={checked} onCheck={setChecked} />
          <Text style={styles.agreeText}>
            I agree with
            <Text style={styles.agreeTextBold}>Terms </Text>&<Text style={styles.agreeTextBold}> Privacy</Text>
          </Text>
        </View>
        <Button onPress={onSubmit} style={styles.button} title='Sign Up' />
        <Separator text='Or sign up with' />
        <GoogleLogin />
        <Pressable hitSlop={20} onPress={onSignIn}>
          <Text style={styles.footerText}>
            Already have an account?
            <Text style={styles.footerLink}> Sign In</Text>
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

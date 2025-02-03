import { Text, View, Linking, Image, Pressable } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import EditableBox from '../../../components/EditableBox';
import Button from '../../../components/Button';
import { ProfileContext } from '../../../../App';
import { updateProfile } from '../../../utils/backendCalls';

function Settings({ navigation }) {
  const [isEditable, setIsEditable] = React.useState(false);
  const { profile, setProfile } = useContext(ProfileContext);
  const [values, setValues] = React.useState({
    _id: profile?.id,
    fullName: profile?.fullName,
    email: profile?.email
  });
  const onEditPress = () => {
    setIsEditable(true);
  };
  const onChangeText = (key, value) => {
    setValues({ ...values, [key]: value });
  };
  const onSave = async () => {
    const updatedProfile = await updateProfile(values);
    setProfile(updatedProfile);
    setIsEditable(false);
  };
  const onItemPress = () => {
    Linking.openURL('https://google.com');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header showBack title='Settings' onBackPress={() => navigation.goBack()} />
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <Pressable hitSlop={15} onPress={onEditPress}>
          <Image style={styles.icon} source={require('./../../../assets/edit.png')} />
        </Pressable>
      </View>
      <EditableBox label='Name' onChangeText={v => onChangeText('fullName', v)} value={values.fullName} editable={isEditable} />
      <EditableBox label='Email' onChangeText={v => onChangeText('email', v)} value={values.email} editable={isEditable} />
      {isEditable && (
        <View style={{ flexDirection: 'row' }}>
          <Button title='Save' style={{ marginTop: 20 }} onPress={onSave} />
        </View>
      )}
      <Text style={[styles.sectionTitle, { marginTop: 40 }]}>Help Center</Text>
      <ListItem onPress={onItemPress} title='FAQ' style={styles.item} />
      <ListItem onPress={onItemPress} title='Contact Us' style={styles.item} />
      <ListItem onPress={onItemPress} title='Privacy & Terms' style={styles.item} />
    </SafeAreaView>
  );
}

export default React.memo(Settings);

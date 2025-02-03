import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileContext, UserContext } from '../../../../App';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';
import { getProfile } from '../../../utils/backendCalls';
import { styles } from './styles';

function Profile({ navigation }) {
  const { setUser } = useContext(UserContext);
  const { profile, setProfile } = useContext(ProfileContext);

  const onLogout = async () => {
    await AsyncStorage.removeItem('token');
    setUser({});
  };
  const onSettingsPress = () => {
    navigation.navigate('Settings');
  };
  const onListingsPress = () => {
    navigation.navigate('MyListings');
  };
  const onCreateListingPress = () => {
    navigation.navigate('CreateListing');
  };
  const num = 10;

  const getProfileData = async () => {
    const data = await getProfile();
    setProfile(data);
  };
  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title='Profile' showLogout onLogout={onLogout} />
      <View style={styles.content}>
        <View>
          <Text style={styles.name}>{profile?.fullName}</Text>
          <Text style={styles.email}>{profile?.email}</Text>
        </View>
        <ListItem title='My Listings' subtitle={`Already have ${num} listing`} onPress={onListingsPress} />
        <ListItem title='Settings' subtitle='Account, FAQ, Contact' onPress={onSettingsPress} />
      </View>
      <Button style={{ flex: 0 }} onPress={onCreateListingPress} title='Add a new listing' />
    </SafeAreaView>
  );
}

export default React.memo(Profile);

import { Text, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ListItem from '../../../components/ListItem';

function Profile({navigation}) {
  const onLogout = () => {console.log('Logout')};
  const onSettingsPress = () => {navigation.navigate('Settings')};
  const onListingsPress = () => {navigation.navigate('MyListings')};
  const onCreateListingPress = () => {navigation.navigate('CreateListing')};
  const num = 10;
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Profile" showLogout onLogout={onLogout}/>
        <View style={styles.content}>
          <View>
            <Text style={styles.name} >User Name</Text>
            <Text style={styles.email}>Email</Text>
          </View>
          <ListItem title="My Listings" subtitle={`Already have ${num} listing`} onPress={onListingsPress}/>
          <ListItem title="Settings" subtitle="Account, FAQ, Contact"  onPress={onSettingsPress}/>
        </View>
        <Button style={{flex:0}} onPress={onCreateListingPress} title="Add a new listing" />
    </SafeAreaView>
  )
}

export default React.memo(Profile);
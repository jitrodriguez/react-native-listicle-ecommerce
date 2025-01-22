import { Text, ScrollView, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ListItem from '../../../components/ListItem';

function Profile() {
  const onLogout = () => {console.log('Logout')};
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Profile" showLogout onLogout={onLogout}/>
        <View style={styles.content}>
          <View>
            <Text style={styles.name} >User Name</Text>
            <Text style={styles.email}>Email</Text>
          </View>
          <ListItem title="My Listings" subtitle="Already have 10 listing" />
          <ListItem title="Settings" subtitle="Account, FAQ, Contact" />
        </View>
        <Button style={{flex:0}} title="Add a new listing" />
    </SafeAreaView>
  )
}

export default React.memo(Profile);
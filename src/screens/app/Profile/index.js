import { Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

function Profile() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Profile</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Profile);
import { Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

function Settings() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Settings);
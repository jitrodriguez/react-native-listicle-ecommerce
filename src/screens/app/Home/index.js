import { Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Header from '../../../components/Header';

function Home() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Header title={'Find All You Need'} showSearch />
      </ScrollView>
    </SafeAreaView>
  )
}

export default React.memo(Home);
import { Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';

function MyListings({navigation}) {
  const renderItem = ({ item, index }) => {
    return (
      <FavoriteItem 
      icon = {require('../../../assets/delete.png')}
      {...item} onPress={()=>navigation.navigate('ProductDetail',{product:item})} />
    )};

  return (
    <SafeAreaView style={styles.container}>
      <Header title="MyListings" showBack onBackPress={()=>navigation.goBack()}/>
      <FlatList data={products} renderItem={renderItem} />
    </SafeAreaView>
  )
}

export default React.memo(MyListings);
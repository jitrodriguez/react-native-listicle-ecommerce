import { Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';

function Favorites({navigation}) {
  const renderItem = ({ item, index }) => {
    return (
      <FavoriteItem {...item} onPress={()=>navigation.navigate('ProductDetail',{product:item})} />
    )};

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={products} renderItem={renderItem} />
    </SafeAreaView>
  )
}

export default React.memo(Favorites);
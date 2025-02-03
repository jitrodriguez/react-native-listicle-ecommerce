import { Text, FlatList, Alert } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
// import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { ServicesContext } from '../../../../App';
import { updateService } from '../../../utils/backendCalls';

function Favorites({ navigation }) {
  const { services, setServices } = useContext(ServicesContext);
  const likedServices = services?.filter(service => service?.liked) || [];

  const removeItem = async item => {
    // remove item from favorites
    const updatedServices = await updateService(item._id, { liked: false });
    if (Array.isArray(updatedServices)) {
      setServices(updatedServices);
    }
  };
  const onItemPress = item => {
    navigation.navigate('ProductDetail', { product: item });
  };

  const onIconPress = item => {
    Alert.alert('Are you sure you want to remove this item from favorites?', '', [
      { text: 'Yes', onPress: () => removeItem(item) },
      { text: 'Cancel' }
    ]);
  };

  const renderItem = ({ item }) => {
    return <FavoriteItem {...item} onIconPress={() => onIconPress(item)} onPress={() => onItemPress(item)} />;
  };
  const EmptyComponent = () => {
    return <Text style={styles.empty}>No favorite items found</Text>;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Favorites' />
      <FlatList ListEmptyComponent={EmptyComponent} data={likedServices} renderItem={renderItem} />
    </SafeAreaView>
  );
}

export default React.memo(Favorites);

import { FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
// import { products } from '../../../data/products';
import FavoriteItem from '../../../components/FavoriteItem';
import Header from '../../../components/Header';
import { ProfileContext, ServicesContext } from '../../../../App';
import { deleteService } from '../../../utils/backendCalls';

function MyListings({ navigation }) {
  const { services, setServices } = React.useContext(ServicesContext);
  const { profile } = React.useContext(ProfileContext);

  const myServices = services?.filter(service => service?.owner === profile?._id) || [];

  const removeItem = async item => {
    const updatedServices = await deleteService(item._id);
    if (Array.isArray(updatedServices)) {
      setServices(updatedServices);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <FavoriteItem
        icon={require('../../../assets/delete.png')}
        {...item}
        onIconPress={() => removeItem(item)}
        onPress={() => navigation.navigate('ProductDetail', { product: item })}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title='MyListings' showBack onBackPress={() => navigation.goBack()} />
      <FlatList data={myServices} renderItem={renderItem} keyExtractor={item => String(item?._id)} />
    </SafeAreaView>
  );
}

export default React.memo(MyListings);

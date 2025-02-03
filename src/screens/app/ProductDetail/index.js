import { View, Text, ScrollView, Image, Pressable, Linking } from 'react-native';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';
import Config from 'react-native-config';
import { updateService } from '../../../utils/backendCalls';
import { ServicesContext } from '../../../../App';

const ProductDetail = ({ navigation, route }) => {
  const params = route?.params || {};
  const { services, setServices } = useContext(ServicesContext);

  // based on backend structure
  const product = services.find(service => service._id === params?.product?._id);

  console.log(product);
  const onContactPress = () => {
    // Linking.openURL(`tel:+51984008857`)
    Linking.openURL('mailto:andre232921@gmail.com');
  };

  const onFavoritePress = async () => {
    console.log(product?.liked);
    const data = await updateService(product?._id, { liked: !product?.liked });
    setServices(data);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product?.images} />
        ) : (
          <Image source={{ uri: `${Config.API_BASE_URL}/${product?.image?.path}` }} style={styles.image} />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product?.title}</Text>
          <Text style={styles.price}>{product?.price}</Text>
          <Text style={styles.description}>{product?.description}</Text>
        </View>
        <Pressable style={styles.backContainer} onPress={() => navigation.goBack()}>
          <Image source={require('../../../assets/back.png')} style={styles.backIcon} />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable onPress={onFavoritePress} style={styles.favoriteContainer}>
          {product?.liked ? (
            <Image source={require('../../../assets/favorites_active.png')} style={styles.icon} />
          ) : (
            <Image source={require('../../../assets/favorites.png')} style={styles.icon} />
          )}
        </Pressable>
        <Button title='Contact Seller' onPress={onContactPress} />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetail);

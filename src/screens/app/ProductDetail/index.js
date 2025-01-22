import {View, Text, ScrollView, Image, Pressable, Linking} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Button from '../../../components/Button';
import ImageCarousel from '../../../components/ImageCarousel';

const ProductDetail = ({navigation, route}) => {
  const {product} = route?.params || {};
  console.log(product);
  const onContactPress = () => {
    // Linking.openURL(`tel:+51984008857`)
    Linking.openURL(`mailto:andre232921@gmail.com`);
  };
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        {product?.images?.length ? (
          <ImageCarousel images={product.images} />
        ) : (
          <Image source={{uri: product?.image}} style={styles.image} />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <Pressable
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assets/back.png')}
            style={styles.backIcon}
          />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={styles.favoriteContainer}>
          <Image
            source={require('../../../assets/favorites.png')}
            style={styles.icon}
          />
        </Pressable>
        <Button title="Contact Seller" onPress={onContactPress} />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(ProductDetail);

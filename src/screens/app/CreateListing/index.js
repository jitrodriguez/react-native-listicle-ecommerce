import React from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Linking,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import EditableBox from '../../../components/EditableBox';
import Header from '../../../components/Header';
import ListItem from '../../../components/ListItem';

import {launchImageLibrary} from 'react-native-image-picker';

import {styles} from './styles.js';
import Input from '../../../components/Input/index.js';
import {categories} from '../../../data/categories.js';

function CreateListing({navigation}) {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [values, setValues] = React.useState({
    title: '',
    price: '',
    description: '',
    category: {},
  });

  const inputFields = [
    {
      placeholder: 'Listing title',
      label: 'Title',
      value: values.title,
      key: 'title',
    },
    {
      placeholder: 'Select the category',
      label: 'Category',
      value: values.category,
      key: 'category',
      type: 'picker',
      options:categories
    },
    {
      placeholder: 'Enter price in USD',
      label: 'Price',
      value: values.price,
      key: 'price',
      keyboardType: 'numeric',
    },
    {
      placeholder: 'Tell us more...',
      label: 'Description',
      value: values.description,
      key: 'description',
      style: styles.textArea,
      multiline: true,
    },
  ];
  const uploadNewImage = async () => {
    setLoading(true);
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});

      if (
        result?.didCancel ||
        !Array.isArray(result?.assets) ||
        result.assets.length === 0
      ) {
        return;
      }
      setImages(list => [...list, ...result.assets]);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };
  const onDeletePress = index => {
    setImages(list => list.filter((_, i) => i !== index));
  };

  const onChangeText = (value, key) => {
    if(key === 'category'){
      setValues({...values, [key]: {...value}});
      return;
    }
    setValues({...values, [key]: value});
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Create new Listing"
        showBack
        onBackPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView behavior="height" style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>Upload Photos</Text>
          <View style={styles.imageRow}>
            <TouchableOpacity
              disabled={loading}
              style={styles.uploadContainer}
              onPress={uploadNewImage}>
              <View style={styles.uploadCircle}>
                <Image
                  source={require('./../../../assets/white_plus.png')}
                  style={styles.uploadPlus}
                />
              </View>
            </TouchableOpacity>
            {images?.map((image, index) => (
              <View>
                <Pressable
                  key={`c_${index}`}
                  hitSlop={10}
                  style={styles.deleteContainer}
                  onPress={() => onDeletePress(index)}>
                  <Image
                    source={require('../../../assets/close.png')}
                    style={styles.delete}
                  />
                </Pressable>
                <Image
                  key={index}
                  source={{uri: image?.uri}}
                  style={styles.image}
                />
              </View>
            ))}
            {loading && <ActivityIndicator size="large" />}
          </View>
          {inputFields.map(field => (
            <Input
              key={field.key}
              placeholder={field.placeholder}
              label={field.label}
              value={field.value}
              onChangeText={v => onChangeText(v, field.key)}
              {...(field.keyboardType && {keyboardType: field.keyboardType})}
              {...(field.style && {style: field.style})}
              {...(field.multiline && {multiline: field.multiline})}
              {...(field.type && {type: field.type})}
              {...(field.options && {options: field.options})}
            />
          ))}
          <Button
            title="Submit"
            onPress={() => {
              Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default React.memo(CreateListing);

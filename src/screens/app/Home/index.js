import React, {useEffect} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';

import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import {styles} from './styles';

function Home() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [keyword, setKeyword] = React.useState('');
  const [filteredProducts, setFilteredProducts] = React.useState(products);

  console.log('keyword', keyword);
  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = products.filter(product =>
        product?.title.toLowerCase().includes(keyword.toLowerCase()),
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && !keyword) {
      setFilteredProducts(products);
    }
  }, [selectedCategory, keyword]);

  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item.id)}
        isSelected={selectedCategory === item.id}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductItem = ({item, index}) => {
    return <ProductHomeItem {...item} onPress={() => console.log('pressed')} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Find All You Need" onSearch={setKeyword} showSearch />
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => String(index)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListFooterComponent={<View style={{height: 200}} />}
        style={styles.productList}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
}

export default React.memo(Home);

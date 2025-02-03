import React, { useContext, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoryBox from '../../../components/CategoryBox';
import Header from '../../../components/Header';
import ProductHomeItem from '../../../components/ProductHomeItem';

import { ServicesContext } from '../../../../App';
import { categories } from '../../../data/categories';
import { getServices } from '../../../utils/backendCalls';
import { styles } from './styles';

function Home({ navigation }) {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [keyword, setKeyword] = React.useState('');
  const { services, setServices } = useContext(ServicesContext);

  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const getServicesData = async () => {
    const data = await getServices();
    setServices(data);
  };

  useEffect(() => {
    getServicesData();
  }, []);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updatedProducts = services.filter(product => String(product?.category) === String(selectedCategory));
      setFilteredProducts(updatedProducts);
    } else if (selectedCategory && keyword) {
      const updatedProducts = services.filter(
        product => String(product?.category) === String(selectedCategory) && product?.title?.toLowerCase().includes(keyword?.toLowerCase())
      );
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && keyword) {
      const updatedProducts = services.filter(product => product?.title?.toLowerCase().includes(keyword?.toLowerCase()));
      setFilteredProducts(updatedProducts);
    } else if (!selectedCategory && !keyword) {
      setFilteredProducts(services);
    }
  }, [selectedCategory, keyword, services]);

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item.id)}
        isSelected={selectedCategory === item.id}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const renderProductItem = ({ item }) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetail', { product: item });
    };
    return <ProductHomeItem {...item} onPress={onProductPress} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Find All You Need' onSearch={setKeyword} showSearch />
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
        ListFooterComponent={<View style={{ height: 200 }} />}
        style={styles.productList}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item, index) => String(index)}
      />
    </SafeAreaView>
  );
}

export default React.memo(Home);

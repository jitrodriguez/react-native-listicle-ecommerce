import { Dimensions, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {styles} from './styles';
const width = Dimensions.get('window').width;
function ImageCarousel({images}) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const renderImage = ({item}) => {
    return (
      <Image source={{uri:item}} style={styles.image}/>
    )};
  const handleScrollEnd = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveIndex(index);
  }
  return (
    <View style={styles.container}>
      <FlatList horizontal pagingEnabled data={images} renderItem={renderImage} onMomentumScrollEnd={handleScrollEnd}/>
      <View style={styles.paginationContainer}>
        {
          images?.map((_,i) => {
            return (
              <View key={i} style={[styles.paginationLine,i===activeIndex?styles.activeLine:{}]}/>
            )
          })
        }
      </View>
    </View>
  )
}

export default React.memo(ImageCarousel)
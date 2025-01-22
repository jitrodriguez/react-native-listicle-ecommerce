import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles';

const ListItem = ({title,subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <Image style={styles.image} source={require('../../assets/forward.png')} />
    </View>
  )
}

export default React.memo(ListItem)
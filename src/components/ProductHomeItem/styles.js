import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const width = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  title: {
    color: colors.lightBlack,
    paddingVertical: 8
  },
  image: {
    width: (width - 96) / 2,
    height: 220,
    borderRadius: 8,
    backgroundColor: colors.lightGray2
  },
  price: {
    color: colors.black,
    paddingBottom: 8
  }
});

import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1
  },
  item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.gray,
    marginBottom: 8,
    marginTop: 16
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24
  }
});

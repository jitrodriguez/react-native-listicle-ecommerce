import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  agreeText: {
    color: colors.blue,
    fontWeight: 500,
    marginHorizontal: 14
  },
  agreeTextBold: {
    fontWeight: 'bold'
  },
  button: {
    marginVertical: 20
  },
  footerText: {
    color: colors.blue,
    marginTop: 50,
    textAlign: 'center'
  },
  footerLink: {
    fontWeight: 'bold'
  }
});

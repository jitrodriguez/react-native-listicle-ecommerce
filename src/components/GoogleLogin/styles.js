import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.darkGray,
        paddingVertical:20,
        paddingHorizontal: 8,
        borderRadius: 14,
        width:'45%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:24
    },
    image:{
        width:30,
        height:30
    }
})
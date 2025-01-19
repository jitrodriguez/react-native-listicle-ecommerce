import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginVertical:8,
        borderBottomWidth:1,
        borderBottomColor:colors.lightGray2,
        paddingBottom:12
    },
    productContainer:{
        flexDirection:'row',
        flex:1
    },
    contentContainer:{
        paddingHorizontal:8,
    },
    title:{
        color: colors.lightBlack,
        paddingBottom:4
    },
    image:{
        width:100,
        height:100,
        borderRadius:10
    },
    price:{
        color:colors.black,
        paddingBottom:8
    },
    close:{
        width:24,
        height:24
    }
});
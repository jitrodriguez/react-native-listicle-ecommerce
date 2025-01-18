import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const styles = StyleSheet.create({
    container:{
        marginBottom:20
    },
    label:{
        marginBottom: 8,
        color:colors.blue,
        fontSize:14,
        fontWeight:'500'
    },
    inputContainer:{
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:14,
        flexDirection:'row',
        alignItems:'center',
    },
    input:{
        flex:1,
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    eye:{
        width:24,
        height:24,
        marginHorizontal:16
    }
})
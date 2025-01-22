import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    safe:{
        flex:1
    },
    container:{

    },
    backContainer:{
        backgroundColor:colors.white,
        position:'absolute',
        borderRadius:8,
        padding:10,
        margin:24
    },
    backIcon:{
        width:20,
        height:20
    },
    image:{
        width:'100%',
        height:height *0.45
    },
    contentContainer:{
        backgroundColor:colors.white,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,
        marginTop:-14,
        paddingHorizontal:24,
    },
    title:{
        marginTop:40,
        fontSize:24,
        fontWeight:'500'
    },
    price:{
        fontSize:30,
        fontWeight:'bold',
        paddingVertical:8
    },
    description:{
        color:colors.gray,
        paddingVertical:8
    },
    footer:{
        padding :24,
        flexDirection:'row',
        alignItems:'center',
    },
    favoriteContainer:{
        backgroundColor: colors.lightGray,
        padding:18,
        borderRadius:8,
        marginRight:16
    },
    icon:{
        width:24,
        height:24
    }
});
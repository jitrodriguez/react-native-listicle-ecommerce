import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
    container:{
        padding:24,
        flex:1
    },
    sectionTitle:{
        fontSize: 14,
        fontWeight: '500',
        color:colors.blue,
        marginTop:16,
        marginLeft:8
    },
    uploadContainer:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:colors.lightGray,
        justifyContent:'center',
        alignItems:'center',
        marginTop:16,
        borderRadius:8,
        borderStyle:'dashed',
    },
    uploadCircle:{
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadPlus: {
        textAlign: 'center',
        color: colors.blue,
        fontSize: 32
    },
    image:{
        width:100,
        height:100,
        borderWidth:1,
        borderColor:colors.lightGray,
        borderRadius:8,
    },
    imageRow:{
        flexDirection:'row',
        marginVertical:16,
        alignItems:'center',
        flexWrap: 'wrap',
        gap: 16
    },
    delete:{
        width:32,
        height:32
    },
    deleteContainer:{
        position:'absolute',
        top:0,
        right:0,
        width:32,
        height:32,
        top:-8,
        right:-8,
        zIndex:1,
        backgroundColor:colors.white,
        borderRadius:16
    },
    textArea:{
        minHeight:140
    }
})
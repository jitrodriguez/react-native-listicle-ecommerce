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
        color:colors.black,
    },
    placeholder:{
        color:colors.lightGray,
        fontSize:16
    },
    arrow:{
        transform:[{rotate:'270deg'}],
        width: 24,
        height: 24,
        marginRight: 8
    },
    modalWrapper:{
        backgroundColor:'rgba(0,0,0,0.5)',
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    modalContent:{
        backgroundColor:colors.white,
        borderRadius:8,
        padding:16,
        width:'80%'
    },
    headerTitle:{
        marginBottom: 16,
        fontSize: 16,
    },
    option:{
        padding: 16,
        borderBottomWidth:1,
        borderBottomColor:colors.lightGray2,
    },
    optionText:{
        color:colors.black,
        fontSize:15
    },
    selectedOption:{
        color:colors.blue,
        fontWeight:'bold'
    },
})
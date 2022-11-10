import {StyleSheet,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= StyleSheet.create({
      container:{
        marginVertical:'2%',
        marginHorizontal: '5%',
        paddingHorizontal: '2%',
        borderColor: 'teal',
        borderWidth: 1,
        borderRadius: 10,
        width: windowWidth * 0.7,
        alignSelf: 'center',
        backgroundColor:'#ACDFDD',
      },
      textInput:{
        flexDirection:'row',
        marginHorizontal: '15%',
        height: 40,
        width: windowWidth * 0.7,
        textAlign:'center',
        alignSelf:'center',
        fontSize: 20,
        fontWeight: '500',
      },
      title:{
        alignSelf: 'flex-end',
        fontWeight:'600',
        color: 'teal'
      },
});
export default styles;
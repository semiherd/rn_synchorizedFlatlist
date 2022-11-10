
import {StyleSheet,Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles= (selected) => StyleSheet.create({
   mainContainer:{
      width: windowWidth,   
   },
   container: {
      width: windowWidth,
      height: windowHeight * 0.25,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderTopWidth: 0.3,
      flexWrap: 'wrap',
   },
   textCont:{  
      backgroundColor: selected? 'tomato':'white',
      flexDirection: 'row',
      borderWidth: 0.5,
      borderRadius: 5,
      padding:5,
      marginVertical: 5,
      marginHorizontal: 5,
      alignSelf: 'center',
      width: windowWidth * 0.35,
      alignSelf: 'center',
      justifyContent: 'center',
   },
   text:{
      fontSize: 15,
      fontWeight: '700',
      padding: '1%',
      textAlign: 'center',
      color: selected? 'white':'tomato',
   },
});
export default styles;


  
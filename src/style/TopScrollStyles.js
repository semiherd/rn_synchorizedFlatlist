
import {StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles= (activeIndex,index) => StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: 'teal',
    borderRadius: 5,
    width: width * 0.35,
    height: height * 0.05,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 50,
    backgroundColor: activeIndex===index? 'tomato':'#A0FEFB',
  },
  text:{
    textAlign: 'center',
    color: activeIndex===index? 'white':'black',
    fontWeight: '700',
  },
});
export default styles;


  
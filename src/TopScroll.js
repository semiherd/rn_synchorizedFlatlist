import React from 'react';
import {View,Text} from 'react-native';
import styles from './style/TopScrollStyles';

export default  TopScroll= ({data,activeIndex,index}) => {
   return(
      <View style={styles(activeIndex,index).container}>
         <Text style={styles(activeIndex,index).text}>{data.name}</Text>
      </View>
   )
}

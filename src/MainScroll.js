import React from 'react';
import {View,Dimensions,ImageBackground} from 'react-native';
import SwitchComponent from './SwitchComponent';
import styles from './style/MainScrollStyles';

export default MainScroll= ({data,activeKey}) => {
   console.log(data.bgImage);
   return(
      <View style={[styles.container]}>               
            <SwitchComponent 
               activeKey={activeKey} 
               item={data} 
            />                                 
      </View>
   )
}


import React from 'react';
import {Dimensions,ImageBackground} from 'react-native';
import LabelSelection from './LabelSelection';
import InputComponent from './InputComponent';

export default SwitchComponent= ({item,activeKey}) => {
   const width = Dimensions.get('window').width;
   const height = Dimensions.get('window').height;
   
   switch(item.name){
      case 'title':
         return (
            <ImageBackground 
               style={{width: width,height: height}} 
               resizeMode="cover" 
               source={require('./asset/image//image3.jpg')}
            >
               <InputComponent key={item.name} item={item} activeKey={activeKey}/>
            </ImageBackground>
         )
         case 'trip':
         return (
            <ImageBackground 
               style={{width: width,height: height}} 
               resizeMode="cover" 
               source={require('./asset/image//image2.jpg')}
            >
               <LabelSelection multiSelection={true} key={item.name} />
            </ImageBackground>
         )
      default :
         return null;
   }
}


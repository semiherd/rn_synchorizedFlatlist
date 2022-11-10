import React, { useState } from 'react';
import {View} from 'react-native';
import InputField from './InputField';

export default InputComponent= ({item}) => {
    const [updatedVal,setUpdatedVal]= useState();
    const [defaultData,setDefaultData]= useState('');
    return ( 
      <View>   
            {item && 
               <InputField
                  itemParams={item}
                  defaultValue={defaultData}
                  setUpdatedVal={setUpdatedVal}
               />
            }     
         </View>
   )
}


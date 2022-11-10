import React, {useState} from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './style/LabelSelectionStyles';
import labelData from './asset/data/LabelData';

export default LabelSelection= ({multiSelection}) => {
   const [itemData,setItemData]= useState([]);
   
   async function onSelect(item){ 
      if(multiSelection){
         if(itemData.length>0){
            const check= itemData.map(i=>i.value).includes(item.value);
            if(check){
               const removeItem= itemData.filter(i=>i.value!=item.value)
               setItemData(removeItem);
            }else setItemData((prev) => ([...prev,item])) 
         }else setItemData([item])
      }else setItemData([item])
   }

   const MapItems= () => {
      return (
         labelData?.map((item, i) => {
            let checkSelected= false;
            if(itemData?.length>0){          
               checkSelected= itemData.filter(i=>i.value==item.value).length>0?true:false;
            }
            
            return (
               <Pressable key={item.id} onPress={() => onSelect(item)}>
                  <View  style={styles(checkSelected).textCont} >
                     <Text style={styles(checkSelected).text}>{item.value}</Text>
                  </View>
               </Pressable>
               
            )
      }))
   }
   
   return ( 
         <View 
            style={[
               styles.mainContainer,
               //animPreviewStyle
            ]}
         >  
            <View style={[styles.container]}>
               {Array.isArray(labelData) &&  labelData &&
                  <MapItems />             
               }
            </View>
         </View>                     
   )
}


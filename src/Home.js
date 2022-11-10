import React, {useState,useEffect} from 'react';
import {Animated,ImageBackground,FlatList,TouchableOpacity,Dimensions,View} from 'react-native';
import styles from './style/HomeStyles';
import MainScroll from './MainScroll';
import TopScroll from './TopScroll';

export default function Home({data}){
   const [info,setInfo]= useState();
   const [activeIndex,setActiveIndex]= useState(0);
   const {width,height}= Dimensions.get('screen');
   const [image,setImage]= useState()
   
   const [animation,setAnimation]= useState(new Animated.Value(0));
   const smallRef= React.useRef();
   const largeRef= React.useRef();

   async function  fetchData(){
      setInfo(data);
      const images= Promise.all(data.map(i=>i.bgImage));
      setImage(images);
   }

   useEffect(() => {
     fetchData();
   },[])

   useEffect(() => {
      Animated.timing(animation, {
         toValue: 1,
         duration: 2000,
         useNativeDriver: true
       }).start()
   },[])

   const animatedStyle = {
      opacity: animation,
      transform: [        
         {
           scale: animation.interpolate({
             inputRange: [0, 1],
             outputRange: [0, 1],
           })
         },
       ],
   }

   const smallItemSize= width * 0.50;
   const largeItemSize= width;

   const scrollToActiveIndex= (index) => {
      setActiveIndex(index);
      largeRef?.current?.scrollToOffset({
         offset: index * largeItemSize,
         animated: true
      })

      if(index * (smallItemSize) - smallItemSize /2 > width /2){
         smallRef?.current?.scrollToOffset({
            offset: index * (smallItemSize) - width /2 + smallItemSize/2,
            animated: true
         })
      }
   }

   const renderItemSmall= ({item,index}) => {    
      return (
         <View key={() => item.key}>
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
               <TopScroll key={item.keyName} activeIndex={activeIndex} index={index} data={item}  />
            </TouchableOpacity>  
         </View>
      )
   }

   const renderItemLarge= ({item,index}) => {
      const key= item.name;
      const indexName= info[activeIndex].name;  
      
      return  <MainScroll activeIndex={activeIndex} activeKey={indexName} data={item} key={key} />
        
   }

   return (     
         <Animated.View style={[styles.container,animatedStyle]}>               
            <ImageBackground 
               style={{width: width,height: height * 0.1}} 
               resizeMode="cover" 
               source={require('./asset/image//image4.jpg')}
            >
            <FlatList
               ref={smallRef}
               data={info}
               renderItem={renderItemSmall}
               keyExtractor={(item,index) => index.toString()}
               horizontal
               pagingEnabled
               contentContainerStyle={{padding:0}}
               showsHorizontalScrollIndicator={false} 
               />              
            </ImageBackground>
            <FlatList
               ref={largeRef}
               data={info}
               horizontal
               pagingEnabled
               contentContainerStyle={{padding:0}}
               showsHorizontalScrollIndicator={false}
               renderItem={renderItemLarge}
               keyExtractor={(item,index) => index.toString()}
               onMomentumScrollEnd={(event) => {
                  const index = Math.floor(Math.floor(event.nativeEvent.contentOffset.x) / width * 1);
                  setActiveIndex(index);
               }}
            />
         </Animated.View> 
     
   )
}


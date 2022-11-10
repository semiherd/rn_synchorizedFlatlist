import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/Home';

const App= () => {

  const data=[
    {
      type: 'input',
      name:'title',
      placeholder:"Enter title",
      multiline:false,
      maxChar: 150,
      textLowerCase: true,
      bgImage: './src/asset/image//image1.jpg'    
    },
    {
      type: 'labelSelection',
      name:'trip',
      placeholder:"Choose trip",
      bgImage: './src/asset/image//image2.jpg'
    },
 ]

  return (
    <SafeAreaView >
      <Home data={data} />
    </SafeAreaView>
  );
};


export default App;

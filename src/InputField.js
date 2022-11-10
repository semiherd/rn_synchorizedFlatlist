import React,{useState,useEffect,useRef} from 'react';
import {View,Text,TextInput} from 'react-native';
import styles from './style/InputFieldStyles';

export default InputField= ({itemParams,defaultValue,setUpdatedVal}) => {

    const {name,placeholder,multiline,maxChar,textLowerCase}=itemParams;

    const[value,setValue]=useState();
    const dynamicRefName= [name]
    const refsArray=  dynamicRefName.map(() => useRef());
 
    async function updateNewValue(item){
        setUpdatedVal(item)
    }   

    useEffect(() => {
        refsArray[0].current.value= value;
        updateNewValue(value);      
    },[value])

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TextInput
                ref={refsArray[0]}
                maxLength={maxChar}
                style={styles.textInput}
                onChangeText={(val) => setValue(val)}
                value={value}
                placeholder={placeholder}
                multiline={multiline || false}
                textBreakStrategy={"highQuality"}
                autoCapitalize={textLowerCase? 'none' : 'words'}
            />
        </View>
    )  
}

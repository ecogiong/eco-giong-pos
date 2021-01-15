import React, { useEffect }from 'react'
import {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, BackHandler } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Logo from './Logo'
const Splash=(props)=>{
    
  
    setItemStorage = async (key, value)=>{
        try{
            await AsyncStorage.setItem(key, JSON.stringify(value));
           
        }catch(error){
            console.log('error');
        }
    }
    getItemStorage = async (key)=>{
        try{
            const value = await AsyncStorage.getItem(key);
            if(value != null)
            {
                  
                props.navigation.navigate('Login')  
                console.log('a')
                return value;
            }
            else{
                this.setItemStorage('isPlashShown', true)
                setTimeout(()=>{
                props.navigation.navigate('Login')
                        }, 5000);
                        console.log('b')
            }
        }catch(error){
            alert('error');
        }
    };
    useEffect(()=>{
        this.getItemStorage("isPlashShown");  
    })
  
  
      return (
          <View style={style.logoContainer}>
              <Logo />
          </View>
      )
}
const style= StyleSheet.create({
    
    
    logoContainer:{
        flex:1,
        backgroundColor:'rgba(224, 175, 81, 0.94)',
        
    },
  
});         
export default Splash;
import { View,StyleSheet,BackHandler } from 'react-native'
import React, {useState} from 'react'
import {useEffect} from 'react'
import PhoneNumberAndPassword from './PhoneNumberAndPassword'
import Logo from './Logo'

const LoginForm = (props)=>{
    disableBackButton=()=>{
            BackHandler.exitApp();
        return true;
    }
    useEffect(() => {
       BackHandler.addEventListener('hardwareBackPress', this.disableBackButton);
       return()=>{
        BackHandler.removeEventListener('hardwareBackPress', this.disableBackButton);
       }
    });

    

    
        return(
    
            <View style={style.container}>

            <View style={style.logoContainer}>
                <Logo/>
            </View>

            <View style={style.PhoneNumberAndPassword} >
                <PhoneNumberAndPassword navigation ={props.navigation.navigate}/>
               
            </View>
            
            </View>

        
        );
    }
            
const style= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor: 'rgba(224, 175, 81, 0.94)'
    },
    
    logoContainer:{
        flex:1,
        
    },
    PhoneNumberAndPassword:{
        flex:1,
        justifyContent: "center"
    }
});
export default LoginForm;
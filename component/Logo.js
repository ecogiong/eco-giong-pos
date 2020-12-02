import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Logo = () =>{
    return(
        <View style={style.container}>
            <View>
                <Image source={require('../Assets/Images/logo-dovang.png')} style={style.Image}/>
            </View>
            <View>
                <Text style={style.Text}>ĐĂNG NHẬP</Text>
            </View>
        </View>
        
        
    );
};

const style= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:"center"
   
       
    },
    Image:{
        width:150,
        height:150
    },
    Text:{
        position:"relative",
        fontFamily:"DDT",
        fontWeight:"bold",
        fontSize:40
        
    }
});

export default Logo;
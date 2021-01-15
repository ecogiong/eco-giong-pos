import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
const{height} = Dimensions.get('screen');
import * as Animatable from 'react-native-animatable'
const height_logo = height * 0.28;
export default class Logo extends Component{
    render(){
        return(
            <View style={style.container}>
                <View>
                    <Animatable.Image 
                    animation="bounceIn"
                    duraton="2000"
                    source={require('../Assets/Images/logo-dovang.png')} style={style.Image}/>
                </View>
                
            </View>
            
            
        );
    }
}
   


const style= StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent:"center"

       
    },
    Image:{
        width:height_logo,
        height:height_logo
    },
   
});

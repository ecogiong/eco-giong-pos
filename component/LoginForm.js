import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import PhoneNumberAndPassword from './PhoneNumberAndPassword'
import Logo from './Logo'
export default class LoginForm extends Component{
    constructor(props){
        super(props)
    }
    render(){
  
        return(
        
            <View style={style.container}>
               <View style={style.logoContainer}>
                <Logo/>
               </View>
               <View style={style.PhoneNumberAndPassword} >
                <PhoneNumberAndPassword navigation ={this.props.navigation}/>
               </View>
              
            </View>
        );
    }

}

const style= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:'#6d2b18'
    },
    logoContainer:{
        flex:1,
       
    },
    PhoneNumberAndPassword:{
        flex:2
    }
});


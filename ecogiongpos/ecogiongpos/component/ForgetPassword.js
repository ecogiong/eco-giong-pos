import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import firebase from 'firebase'


export default class ForgetPassword extends React.Component{

    constructor(props){
        super(props)
        const firebaseconfig={
            apiKey: "AIzaSyCKUywS1fPByQSb-ISnlC-5Bgt2lbOpOeo",
            authDomain: "giong-app.firebaseapp.com",
            databaseURL: "https://giong-app.firebaseio.com",
            projectId: "giong-app",
            storageBucket: "giong-app.appspot.com",
            messagingSenderId: "174265541481",
            appId: "1:174265541481:web:d3cde5857e95d5eb6f93f8",
            measurementId: "G-3R3KB1W7PL"
        };           
                   
        if (!firebase.apps.length) 
        {
            firebase.initializeApp(firebaseconfig);
        }
        this.state={
            PhoneNumber:'',
            Password:'',
        };
        this.data = firebase.database().ref('/Accounts');    
    }

    onPress=()=>{     
        this.data.orderByChild('PhoneNumber')
        .equalTo(this.state.PhoneNumber)
        .once('value', snapshot => {
            const snap_val = snapshot.val();
            if(snap_val === null){
               alert('Thất bại')
            }
            else {
               
                firebase.database().ref('Accounts/'+([Object.keys(snap_val)].toString())).update({
                    Password: this.state.Password
                })
                console.log(snap_val)
                console.log([Object.keys(snap_val)].toString())
                console.log('thanh cong')
                alert('Thành công')
                this.props.navigation.navigate('Login')
               
            };       
        })
        
    
    };

    render(){
        
        return(
            <View style={style.container}>
            <TextInput  
                style={style.inputText}
                placeholder="Số điện thoại" 
                placeholderTextColor="black"
                value={this.state.PhoneNumber}
                onChangeText={PhoneNumber => this.setState({PhoneNumber})}
            />

            <TextInput  
                secureTextEntry
                style={style.inputText}
                placeholder="Mật khẩu" 
                placeholderTextColor="black"
                value={this.state.Password}
                onChangeText={Password => this.setState({Password})}
            />

            <TouchableOpacity style={style.ButtonContainer} onPress={this.onPress}>
                <Text style={style.ButtonText}>
                    Đồng ý
                </Text>
            </TouchableOpacity>
            
        </View>
   
        );
    }
}
const style= StyleSheet.create({
    container:{
       flex:0.8,
        backgroundColor: "green",
       alignContent:"center",
       margin: 10
       
    },
    inputText:{
        height:40,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        paddingLeft:20,
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
        fontFamily:"DDT"
    },
    ErrorText:{
        fontSize:25,
        color:"red",
        alignSelf:"center"
    },
    ButtonText:{
        fontFamily: "DDT",
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        fontWeight:"bold"
    },
    ButtonContainer:{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 5,
        padding: 10,
        width: 100,
        justifyContent: "center",
        alignSelf:"center"
        
    }
});
    
    
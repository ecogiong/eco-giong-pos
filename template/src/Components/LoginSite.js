/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Component } from 'react';
export default class LoginSite extends Component {
  constructor(props) {
    super(props)
    this.state={
      phone:"",
      password: "",
    };  }

  LoginFunc = () => {console.log('hihiha')}
  render(){
    return (
        <View style={styles.container}>
        <Text style={styles.logo}>ĐĂNG NHẬP</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Your Phone Number..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({phone:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity onPress={() => {console.log(this.state.phone)}}>
          <Text style={styles.forgot}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={this.LoginFunc}>
          <Text style={styles.loginText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => {console.log('hihihi')}}>
          <Text style={styles.loginText}>ĐĂNG KÍ</Text>
        </TouchableOpacity>
      </View>
     
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  loginText:{
    fontWeight:"bold",

  },

  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },

  inputText:{
    height:50,
    color:"white"
  },

  forgot:{
    color:"black",
    fontSize:11
  },

  loginBtn:{
    width:"80%",
    backgroundColor:"#6F2205",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
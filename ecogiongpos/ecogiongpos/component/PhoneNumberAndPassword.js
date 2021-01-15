import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { HeaderTitle } from 'react-navigation-stack'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'

const {width: WIDTH } =  Dimensions.get('screen')
class PhoneNumberAndPassword extends React.Component{
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
            measurementId: "G-3R3KB1W7PL"}
            if (!firebase.apps.length) 
            {
                firebase.initializeApp(firebaseconfig);
            }
            this.state={
                PhoneNumber:'',
                Password:'',
                Status:true
            };
            this.data = firebase.database().ref('/Accounts');      
    };
   
    onPressChangeStatus=()=>{
        this.setState({
            Status: !this.state.Status
        })
    }


    onPress=()=>{     
        this.data.orderByChild('PhoneNumber')
        .equalTo(this.state.PhoneNumber)
        .once('value', snapshot => {

            const snap_val = snapshot.val();

            if(snap_val === null)
            {

                if(this.state.PhoneNumber == "" && this.state.Password != ""){alert('Bỏ trống số điện thoại')}
                console.log(this.state.PhoneNumber)
                if(this.state.PhoneNumber != "" && this.state.Password == ""){alert('Bỏ trống số mật khẩu')}
                if(this.state.PhoneNumber == "" && this.state.Password == ""){alert('Bỏ trống mật khẩu và số điện thoại')}
                if(this.state.PhoneNumber != "" && this.state.Password != "" && snap_val==null) {alert('Mật khẩu và số điện thoại không đúng')}
            } 
            
            else {
                var loginObject = snap_val[Object.keys(snap_val)[0]]

                if(loginObject.Password == this.state.Password)
                {
                    this.props.navigation('Articles');
                }

                else
                {
                    alert('mật khẩu không đúng')
                }
               
            };       
        })
        
    
    };


    render(){
            const {Status}= this.state;
        return(

            <View style={style.container}>
                <Icon name="call-outline" size={20} style={style.InputIcon}/>
                <TextInput  
                    style={style.inputText}
                    keyboardType = 'numeric'
                    placeholder="Số điện thoại" 
                    value={this.state.PhoneNumber}
                    onChangeText={PhoneNumber => this.setState({PhoneNumber})}
                />

                 { this.state.PhoneNumber.length < 10 ?
                  
                     <Feather 
                        color="green"
                        autoCapitalize = "none"
                        size={20}
                        style={style.InputIconCheck1}
                    />
                        
                    : this.state.PhoneNumber.length <=12?
                     <Feather 
                        name="check-circle"
                        color="green"
                        autoCapitalize = "none"
                        size={20}
                        style={style.InputIconCheck1}
                    />
                     :
                     <Feather 
                        name="x-circle"
                        color="red"
                        autoCapitalize = "none"
                        size={20}
                        style={style.InputIconCheck1}
                    />   
                 }
               
                <Icon name="lock-closed-outline" size={20} style={style.InputIcon}/>
                {Status === true ?
                    <TextInput  
                    secureTextEntry
                    style={style.inputText}
                    placeholder="Mật khẩu" 
                    value={this.state.Password}
                    onChangeText={Password => this.setState({Password})}
                    />:
                    <TextInput  
                    secureTextEntry={false}
                    style={style.inputText}
                    placeholder="Mật khẩu" 
                    value={this.state.Password}
                    onChangeText={Password => this.setState({Password})}
                    />
                }
                
                <TouchableOpacity style={style.CheckPass} onPress={this.onPressChangeStatus}>
                {Status === true ? 
                <Feather 
                    name="eye-off"
                    color="grey"
                    autoCapitalize = "none"
                    size={20}
                    style={style.InputIconCheck2}
                />:
                <Feather 
                    name="eye"
                    color="grey"
                    autoCapitalize = "none"
                    size={20}
                    style={style.InputIconCheck2}
                />
                }
                </TouchableOpacity>
                
                <TouchableOpacity style={style.TextContainer} onPress={()=>{this.props.navigation('Forget Password')}}>
                    <Text style={style.TextLink}>
                        Quên mật khẩu
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  style={style.ButtonContainer} onPress={this.onPress}>
                        <Text style={style.ButtonText}>
                            Đăng nhập
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const style= StyleSheet.create({
    container:{
       flex:1,
       borderTopLeftRadius: 30,
       borderTopRightRadius: 30,
       justifyContent:"center",
       backgroundColor: "#fff"
      
       
    },
    inputText:{ 
        height:45,
        borderRadius:45,
        fontSize:16,
        fontFamily:"DDT",
        width: WIDTH - 55,
        paddingLeft: 45,
        marginHorizontal: 25,
        
        
        
    },
    ButtonText:{
        fontFamily: "DDT",
        fontSize: 20,
        color: "black",
        textAlign: "center",
        fontWeight:"bold"
    },
    TextLink:{
        fontFamily: "DDT",
        fontSize: 10,
        color: "black",
        textAlign: "center",
        fontWeight:"bold"
    },
    ButtonContainer:{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight:20,
        padding: 10,
        justifyContent: "center",
        alignSelf:"center",
        
        
    },
    TextContainer:{
        margin:20,
        width: 100,
        justifyContent: "center",
        alignSelf:"center"
    },
    InputIcon:{
        justifyContent: "center",
        top:32,
        left: 37,
 
    },
    InputIconCheck1:{
        textAlign:"right",
        right: 50,
        justifyContent:"flex-end",
        marginLeft: 390, 
        top: -32
        
    },
    InputIconCheck2:{
        textAlign:"center",
        top: 8
    },
    CheckPass:{
    
        position:"absolute",
        right: 50,
        justifyContent:"flex-end",
  
 
    }
    
});
    
    

export default PhoneNumberAndPassword;
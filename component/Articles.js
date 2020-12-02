import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

class Articles extends Component{
constructor(props){
    super(props)
}
    render(){

        return(
            <View style={style.container}>
                <View style={style.ArticleContainer}>
                    <Text style={style.heading}>
                        Welcome 
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                        <Text style={style.LogOut}>
                            Log Out
                        </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
    

const style= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    heading:{
        fontSize: 50,
        fontWeight: "bold"
    },
    content:{
        textAlign:"center",
        fontSize: 20
    },
    LogOut:{
        textAlign:"center",
        fontSize:40
    },
});

export default Articles;
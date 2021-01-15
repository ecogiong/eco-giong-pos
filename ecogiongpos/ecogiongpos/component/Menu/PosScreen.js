import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather' 
export default class PosScreen extends Component{
    render(){
        var items = this.props.elm.map((a, index)=>{
        
            return(
                
                <View style={style.item} key={index}>

                        <TouchableOpacity style={style.Button3}>

                            <Text>{a.name}</Text>

                        <TouchableOpacity style={style.Button}>

                            <TouchableOpacity   
                                style={style.Button1}>
                                <Icon name="add-outline" style={style.Icon} size={20} 
                                onPress={()=>this.props.onPosScreenAdd(a.id, a.name, a.category_id)} />                                
                            </TouchableOpacity>
                            <Text style={style.Text}>{a.quantity}</Text>
                            <TouchableOpacity style={style.Button2}>
                                <Icon name="remove-outline" style={style.Icon} size={20} 
                                 onPress={()=>this.props.onPosScreenRemove(a.id, a.name, a.category_id)}/>                                
                            </TouchableOpacity>
                                
                        </TouchableOpacity>

                    </TouchableOpacity>
    
                </View> 
            )
            
        })
        return(

           <ScrollView>
                {items}
           </ScrollView>
 
        );
    }
}
 const style = StyleSheet.create({  
     item:{
        
        justifyContent:"center",
        alignItems:"center",
        
        
    },
    Button:{
        borderRadius: 10,
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        width:"100%",
     
   
    },
    Icon:{
        color: "#fff"
    },
    Button1:{
        width:30,
        height:30,
        backgroundColor: '#FF6666',
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",    
    },
    Button2:{
        width:30,
        height:30,
        backgroundColor: '#FF6666',
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center"    
    },
    Button3:{
        width: '90%',
        height: 100,
        backgroundColor:"red",
        margin: 4,
        justifyContent: "center",
        borderRadius: 10,
        alignItems:"center"
   
    },
    Text:{
        alignSelf:"center"
    }
 })
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
export default class MenuScreen extends Component{

    render(){
        const item = this.props.data.map((a, index)=>{
            return(  
            <View  style={style.item} key={index}>
                <Text style={style.Text}>{a.name} {a.quantity}</Text>
                <TouchableOpacity  onPress={()=>this.props.onPosScreen(a.id, a.name, a.category_id)} 
                style={style.Button}>
                    <Icon name="add-outline" style={style.Icon} size={20} />
                </TouchableOpacity>
            </View>)
            }
        )
        return(
           <View style={style.container}>
                {item}
           </View>
          
        )
    }
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex: 2,
        flexWrap:"wrap",
        backgroundColor: "blue",
        paddingVertical: 5,
        height: Dimensions.get('window').height,
       

    },
    Icon:{
        color: "#fff"
    },
    item:{
       
        margin:4,
        borderRadius: 10,
        width: '30%',
        height: '15%',
        justifyContent:"center",
        backgroundColor:"yellow",
        padding: 10
       
    },
    Button:{
        width:30,
        height:30,
        backgroundColor: '#FF6666',
        borderRadius: 50,
        alignSelf: "flex-end",
        alignItems:"center",
        justifyContent:"center"
 
       
        
    }
})
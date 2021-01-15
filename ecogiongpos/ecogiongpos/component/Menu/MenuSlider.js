import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, FlatList, Dimensions} from 'react-native'
export default class MenuSlider extends Component{

    render(){
         const item = this.props.data.map((a, index)=>{
            return(  
            <View  style={style.item} key={index}>
                <TouchableOpacity style={style.Button} 
                    onPress={()=>this.props.getKey(a.category_id)}>

                    <Text>{a.category_name}</Text>
                    
                </TouchableOpacity>
            </View>)
            }
        )
        return(
            <ScrollView horizontal= {true} >
                <View style={style.container}>
                    {item}
                </View>
            </ScrollView>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        flex: 2,
        flexWrap:"nowrap",
        backgroundColor: "white",
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: Dimensions.get('window').width
    },
    item:{  
        margin:4,
        width: '20%',
        alignItems:"center"
    },
    Button:{
        width: '100%',
        backgroundColor: 'red',
        height: '100%',
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 10,
    }
})
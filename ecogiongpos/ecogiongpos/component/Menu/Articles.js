import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView, Dimensions, Alert} from 'react-native'
import { Button, Header, Item, Input, Icon, } from 'native-base';
import MenuScreen from './MenuScreen'
import MenuSlider from './MenuSlider'
import PosScreen from './PosScreen';
import BottomPosScreen from './BottomPosScreen';
var search=""
var data =  
    [
        {
            name: 'tra dao hihi',
            id : 1,
            quantity: 10,
            category_id:1
        }, 
        {
            id : 2,
            name: 'tra tac haha',
            quantity: 10,
            category_id:1
        }, 
        {
            id: 3,
            name: 'tra vai hehe',
            quantity: 10,
            category_id:1
        }, 
        {
            id: 4,
            name: 'tra dao yeah yeah ',
            quantity: 10,
            category_id:1
        }, 
        {
            quantity: 5,
            name: 'cà phê ta',
            id : 1,
            category_id:2
        }, 
        {
            quantity: 5,
            id : 2,
            name: 'cà phê bạn',
            category_id:2
        }, 
        {
            quantity: 5,
            id: 3,
            name: 'Espresso',
            category_id:2
        }, 
        {
            quantity: 5,
            id: 4,
            name: 'Cappuccino',
            category_id:2
        }, 
    ]

var category=[
    {
        category_id: 1,
        category_name: "tra" 
    },
    {
        category_id: 2,
        category_name: "ca phe"
    }

]
    
class Articles extends Component{
    constructor(props){
        super(props)
        this.state={
            task:[],
            isAdd: false,
            elm:[],
           
            MenuScreen:[]
        }
        this.text = React.createRef();
    }

    getKey=(key)=>{
        let found= data.filter(e=> e.category_id == key)
        this.setState({
            task: found
        })
    
    }

    onPosScreenAdd=(key, name, category_id)=>{
        var elm = this.state.elm
        var task = this.state.task.filter(e=> e.id == key && e.category_id == category_id)
        
        if (task[0].quantity > 0)
        {
            task[0].quantity = task[0].quantity -1
            let found = elm.filter(e => (e.id==key && e.category_id == category_id))
            
            if(found.length>0){
                found[0].quantity = found[0].quantity+1;
            }
            
            else {
                elm.push({
                    id: key,
                    name: name,
                    category_id: category_id,
                    quantity: 1
                })
            }
            
            
            this.setState({
                elm: elm // element
            })
               
        }

        if (task[0].quantity == 0)
        {
            task[0].quantity.quantity = 0 
            alert('Hiện tại đã hết hàng')
           
        }
      

    }

    onPosScreenRemove=(key, name, category_id)=>{
        var elm = this.state.elm
        var task = this.state.task.filter(e=> e.id == key && e.category_id == category_id)
            
            let found = elm.filter(e => (e.id==key && e.category_id == category_id))
        if(found[0].quantity > 0)
        {
            task[0].quantity = task[0].quantity +1
            if(found.length>0){
                found[0].quantity = found[0].quantity-1;
            }
            
            this.setState({
                ...elm,
                quantity:found[0].quantity  // element
            })

        }
            
        if (found[0].quantity == 0)
        {
            this.setState({
                ...elm,
                quantity: 0
            })
            alert('Đã đạt số lượng giảm tối đa')
           
        }
      

    }

    Search=(key_words)=>{
        let found=Object.values(data).filter(e => 
            e.name.toLowerCase().includes(key_words.toLowerCase()))
        search = key_words
        console.log(search)
        this.setState({
            task:found
        })   
    }

    onDeleteText=()=>{
        this.Search("")
        this.text.current._root.clear();

    }

    onDelete=()=>{
        this.setState({
            elm: []

        })
    }

    render(){
         
            return(
                <View style={style.container}>
                    <View style={style.MenuScreen}>
                       
                        <TouchableOpacity onPress={this.onDelete}><Text>Xóa</Text></TouchableOpacity>
                        <View searchBar style={style.searchBar}>
                            <Item >
                                <Icon name="search-outline" />
                                <Input placeholder="Tìm kiếm" 
                                    onChangeText={this.Search}
                                    ref={this.text}
                                />
                                { search =="" 
                                    ?     
                                    <View></View>
                                   :
                                   <Icon name="close-circle-outline" onPress={this.onDeleteText} />
                                }
                                
                                
                            </Item>
                        </View>
                        <ScrollView >
                            <View>
                                    <MenuScreen data={this.state.task} onPosScreen={this.onPosScreenAdd} />
                            </View>
                        </ScrollView>
                        <View style={style.SliderScreen}>
                            <MenuSlider  data={Object.values(category)} getKey={this.getKey}/>
                        </View>
                    </View>
                    <View style={style.PosScreen}>
                        <PosScreen onPosScreenRemove={this.onPosScreenRemove} onPosScreenAdd={this.onPosScreenAdd} elm={this.state.elm}/>
                    </View>
                    <View style={style.BottomPosScreen}>
                        <BottomPosScreen/>
                    </View>
                   
                   
                </View>
            );
        }

       
    }
    

const style= StyleSheet.create({
    container:{
        flex:1,
        flexDirection: "row",
        
    },
    
    PosScreen:{
        flex: .5,
       
       
      
    },
    searchBar:{
        backgroundColor:"#FF6666",
       paddingStart: 10
    },
    MenuScreen:{
        flex: 1,
        flexWrap:"wrap"  
    },
    ViewInScrollView:{
        alignItems:"center",
        
    },
    SliderScreen:{
        height: '25%'
    }
});

export default Articles;



import * as React from "react";
import { View,StyleSheet,Text,Dimensions, StatusBar, TouchableOpacity,Switch } from "react-native";

const{width,height} = Dimensions.get("window");



export default class Login extends React.Component{
  state = {
    number: ` `,
    number2: ` `,
    sonuc: `0`,
    islem: ` `,
  }
  changeNumber = (number) => {
    this.setState({ number: `${this.state.number}${number}` })
  }
  TurnZero = (number) => {
    this.setState({number: ` `})
  }
 
  
  render(){
 
  return(
    <View style = {{flex:1 ,backgroundColor:"#000",paddingTop:10}}>
      <StatusBar barStyle = "light-content" ></StatusBar>
      <View style = {{ flex:1, alignItems:"flex-end",justifyContent:"flex-end"}}>
        <Text style = {{fontSize:59, fontWeight:"600",color:"white"}}>{this.state.number} </Text>
      </View>

      <View style = {{flexDirection:"row" , width:width , justifyContent:"space-between",paddingHorizontal:20,marginTop:10}}>
        <TouchableOpacity onPress = {() => this.TurnZero()}  >
        <View style = {styles.white_buttons}>
          <Text style = {{fontSize:30, fontWeight:"600"}}>AC</Text>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style = {styles.white_buttons}>
        <Text style = {{fontSize:30, fontWeight:"600"}}>+/-</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.white_buttons}>
        <Text style = {{fontSize:30, fontWeight:"600"}}>%</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.buttons}>
        <Text style = {{fontSize:30, fontWeight:"600"}}>/</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style = {{flexDirection:"row" , width:width , justifyContent:"space-between",paddingHorizontal:20,marginTop:10}}>

        <TouchableOpacity  onPress = {() => this.changeNumber(7)} >
        <View style = {styles.white_buttons}>
          <Text style = {{fontSize:30, fontWeight:"600"}}>7</Text>
        </View>

        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(8)} >
        <View style = {styles.white_buttons}>
        <Text style = {{fontSize:30, fontWeight:"600"}}>8</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(9)} >
        <View style = {styles.white_buttons}>
        <Text style = {{fontSize:30, fontWeight:"600"}}>9</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>X</Text>
        
        </View>
        </TouchableOpacity>
      </View>
      <View style = {{flexDirection:"row" , width:width , justifyContent:"space-between",paddingHorizontal:20,marginTop:10}}>
        <TouchableOpacity onPress = {() => this.changeNumber(4)} >
        <View style = {styles.white_buttons}>
          <Text style = {{fontSize:30, fontWeight:"600"}}>4</Text>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(5)} >
        <View style = {styles.white_buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>5</Text>
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(6)} >
        <View style = {styles.white_buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>6</Text>
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.buttons}>
        
        <Text style = {{fontSize:50, fontWeight:"600"}}>-</Text>
        
        </View>
        </TouchableOpacity>
      </View>
      <View style = {{flexDirection:"row" , width:width , justifyContent:"space-between",paddingHorizontal:20,marginTop:10}}>
        <TouchableOpacity onPress = {() => this.changeNumber(1)} >
        <View style = {styles.white_buttons}>
          <Text style = {{fontSize:30, fontWeight:"600"}}>1</Text>

        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(2)} >
        <View style = {styles.white_buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>2</Text>
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.changeNumber(3)} >
        <View style = {styles.white_buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>3</Text>
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => this.operation()}>
        <View style = {styles.buttons}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}>+</Text>
        
        </View>
        </TouchableOpacity>
      </View>
      <View style = {{flexDirection:"row" , width:width , justifyContent:"space-between",paddingHorizontal:20,marginTop:10}}>
        <TouchableOpacity onPress = {() => this.changeNumber('0')} >
        <View style = {{width:(width/2)-20,height:width/5-20,backgroundColor:"gray",borderRadius:width/4,alignItems:"center", justifyContent:"center"}}>
          <Text style = {{fontWeight:"600",fontSize:45}}> 0 </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.last_btn}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}> , </Text>
        
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style = {styles.last_btn}>
        
        <Text style = {{fontSize:30, fontWeight:"600"}}> = </Text>
        
        </View>
        </TouchableOpacity>
      </View>
    </View>
      );
    }}
    const styles = StyleSheet.create({
      buttons:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"orange", 
        borderRadius:(width/4)-20,
        width: width/4-20,
        height: width/4-20
    
      },
      white_buttons:{
        width:(width/4)-20,
        height:(width/4)-20, 
        backgroundColor:"gray",
        alignItems:"center",
        justifyContent:"center" , 
        borderRadius:(width/4)-20
    
      },
      last_btn:{
        width:(width/4)-20, 
        height:(width/5)-20,
        alignItems:"center",
        justifyContent:"center", 
        backgroundColor:"gray", 
        borderRadius:(width/4)-20
    
      }
      
      ,
    });
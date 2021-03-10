import React,{useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer =(state,action) =>{ 
    //state ==={red:number, green:number' blue:number}
    //action ==={colorToChange:'red' ||'green'||'blue', amount: 15 || -15}
           switch (action.colorToChange) {
               case 'red':
                   //validation using ternary expression
                  return state.red + action.amount >255 || state.red + action.amount <0
                  ? state
                  : {...state, red:state.red + action.amount};
                                                  
                case 'blue':
                    return state.blue + action.amount >255 || state.blue + action.amount <0
                    ? state
                    : {...state, blue:state.blue + action.amount};
                case 'green':
                    return state.green + action.amount >255 || state.green + action.amount <0
                    ? state
                    : {...state, green:state.green + action.amount};
                                   
               default:
                   return;
           }
        };

    const SquareScreen = () => {
      
        const[state,runMyReducer] = useReducer(reducer,{red:0, green:0, blue:0});
        const{red,green, blue} = state;
       
      return (
   <View>
       <ColorCounter 
       onIncrease ={() =>runMyReducer({colorToChange:'red', amount:COLOR_INCREMENT}) } 
       onDecrease ={() =>runMyReducer({colorToChange:'red', amount:-1*COLOR_INCREMENT}) }
       color="Red"/>
       <ColorCounter
       onIncrease ={() => runMyReducer({colorToChange:'blue', amount:COLOR_INCREMENT})} 
       onDecrease ={() =>runMyReducer({colorToChange:'blue', amount:-1*COLOR_INCREMENT})}
        color="Blue"/>
       <ColorCounter 
       onIncrease ={() =>runMyReducer({colorToChange:'green', amount:COLOR_INCREMENT}) } 
       onDecrease ={() =>runMyReducer({colorToChange:'green', amount:-1*COLOR_INCREMENT}) }
       color="Green"/> 
       <View
        style = {{
            height:150,
             width:150, 
             backgroundColor: `rgb(${red}, ${green},${blue})`
             }} />
             
   </View>
   );
};

const styles = StyleSheet.create ({});

export default SquareScreen;
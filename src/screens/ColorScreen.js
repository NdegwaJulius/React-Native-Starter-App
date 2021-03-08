import React,{useState} from 'react';
import {View, Text, StyleSheet,Image, Button} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title ="Add a Color" onPress ={() => {
                setColors([...colors, randomRgb()])
            }} />
            <View style = {{height:100,width:100,backgroundColor: randomRgb() }}
            >

            </View>
            
            
    </View>
    ); 
};
//random rgb function
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create ({});

export default ColorScreen;
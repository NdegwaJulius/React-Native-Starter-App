import React from 'react';
import {Text, StyleSheet,View } from 'react-native';


const ComponentsScreen = () => {
    const name= 'Julius';
    return <View>
    <Text style={styles.textStyle}>Getting started with react native</Text>
    <Text style={styles.subheaderStyle}>My name is {name}</Text>
    </View>
};

const styles = StyleSheet.create(

    {
        textStyle : {
            fontSize: 20 
        
        },
        subheaderStyle : {
            fontSize : 20

        }
    }
);

export default ComponentsScreen;

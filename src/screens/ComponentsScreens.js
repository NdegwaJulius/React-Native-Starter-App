import React from 'react';
import {Text, StyleSheet,View } from 'react-native';


const ComponentsScreen = () => {
    const name= 'Julius';
    return <View>
    <Text style={styles.textStyle}>Getting started with react native</Text>
    <Text style={styles.subheaderStyle}>my name is {name}</Text>
    </View>
};

const styles = StyleSheet.create(

    {
        textStyle : {
            fontSize: 45 
        
        },
        subheaderStyle : {
            fontSize : 20

        }
    }
);

export default ComponentsScreen;

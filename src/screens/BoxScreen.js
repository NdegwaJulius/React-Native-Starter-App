import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child1 </Text>
        <Text style={styles.textTwoStyle}> Child2</Text>
        <Text style={styles.textThreeStyle}> Child3</Text>
    </View>

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor:'black',
        height:200

    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red'
       },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
       fontSize:30,
      ...StyleSheet.absoluteFillObject
    
      
       
        
        
        
    },
    textThreeStyle:{
        borderWidth:10,
        borderColor:'red',
       
        
    }
});

export default BoxScreen;
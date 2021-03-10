import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> This is a box BoxScreen</Text>
    </View>

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth:1,
        borderColor:'black'
    },
    textStyle:{
        borderWidth:10,
        borderColor:'red',
        margin:20
    }
});

export default BoxScreen;
import React from  'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from './components/ImageDetails';

const ImageScreen = () => {
    
    return <View>
        <ImageDetails title= "forest"  
        imageSource = {require('../../assets/forest.jpg')} 
        score ="4" />
        <ImageDetails title= "mountain" 
        imageSource = {require('../../assets/mountain.jpg')} 
        score ="7"/>
        <ImageDetails title= "beach" 
        imageSource = {require('../../assets/beach.jpg')}
         score ="8"/>
        
    </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;
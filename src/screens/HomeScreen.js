import React from "react";
import { Text, StyleSheet, View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return(
  <View>
   <Text style={styles.text}>Hi There!</Text>
   <Button title="Go to components demo" 
   onPress={() => navigation.navigate('Components')}
   />
   <Button
   title = "Go to list demo" 
   color = "red"
    onPress ={() => navigation.navigate('List')}
   />
   <Button
   title = "Go to  Images Demo" 
   color = "black"
    onPress ={() => navigation.navigate('Image')}
   />
   <Button
   title = "Go to  Counter Demo" 
   color = "green"
    onPress ={() => navigation.navigate('Counter')}
   />
    <Button
   title = "Go to  Colors  Demo" 
   
    onPress ={() => navigation.navigate('Color')}
   />
   </View>
   );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
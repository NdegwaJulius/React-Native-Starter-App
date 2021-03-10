import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';


const TextScreen =() => {
    const [password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
           <TextInput 
           style ={styles.input}
           autoCapitalize ="none"
           autoCorrect={false}
           value={password}
           onChangeText ={(newValue)=>setPassword(newValue) }
           />
           {password.length <8 ? <Text>Password must be at least  8 characters</Text> : null}
        </View>
    );

};
const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor:'black',
        borderWidth:1 
    }
});
export default TextScreen;
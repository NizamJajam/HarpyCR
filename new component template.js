import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default class newFile extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <View style={styles.main}>
                <Text style={{color: 'black'}}>Details here</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    main:{
        flex: 1, 
        width: '100%',
        backgroundColor: "white"
    },
})
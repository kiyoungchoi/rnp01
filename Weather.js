import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';

export default class Weather extends Component{
    render(){
        return(
            <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
                <View style ={styles.upper}>
                    <Text>Icons here</Text>
                    <Text style={styles.temp}>35</Text>
                </View>
                <View style={styles.lower}>
                    <Text style={styles.title}>Raining so much hard</Text>
                    <Text style={styles.subtitle}>for a more info</Text>
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper : {
        flex:1,
        justifyContent:"center",
        alignItems: "center"
    },
    temp:{
        fontSize:38,
        backgroundColor: "transparent",
        color:"white",
        marginTop:10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title:{
        fontSize:30,
        marginBottom:10,
        color:"white",
        fontWeight:"300"
    },
    subtitle:{
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom:24
    }
});
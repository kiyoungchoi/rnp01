import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop=types'; 
// fontawesome도 넣을수 있다.

// export default class Weather extends Component{
//     render(){
//         return(
//             <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
//                 <View style ={styles.upper}>
//                     <Ionicons color="white" size={144} name="ios-rainy" />
//                     <Text style={styles.temp}>35</Text>
//                 </View>
//                 <View style={styles.lower}>
//                     <Text style={styles.title}>Raining so much hard</Text>
//                     <Text style={styles.subtitle}>for a more info</Text>
//                 </View>
//             </LinearGradient>
//         );
//     }
// }
    
const weatherCases = {
    Rain : {
        colors : ['#00c6fb', '#005bea'],
        title : "Raining like a MF",
        subtitle : "For more info look outside",
        icon : "ios-rainy"
    },
    Clear : {
        colors : ['#fef253', '#ff7300'],
        title : "Sunny as fuck",
        subtitle : "go get your ass burnt",
        icon : "ios-sunny" 
    },
    Thunderstorm : {
        colors : ['#00ecbc', '#007adf'],
        title : "thurderstorm in the house",
        subtitle : "Actually outside of the house",
        icon : "ios-thunderstorm" 
    },
    Clouds : {
        colors : ['#d7d2cc', '#304352'],
        title : "Clouds",
        subtitle : "i know, it's boring",
        icon : "ios-cloudy" 
    },
    Snow : {
        colors : ['#7de2fc', '#b9b6e5'],
        title : "Cold as balls",
        subtitle : "Do you know to build a snowman?",
        icon : "ios-snow" 
    },
    Drizzle : {
        colors : ['#8f7fe', '#66a6ff'],
        title : "Drizzle",
        subtitle : "is like rain, but hay",
        icon : "ios-rainy-outline" 
    },
    Haze : {
        colors : ['#8f7fe', '#66a6ff'],
        title : "Haze",
        subtitle : "Don't know, what that is",
        icon : "ios-rainy-outline" 
    }

}     
export default function Weather( {temp, weatherName} ){

    <LinearGradient colors={['#00c6fb', '#005bea']} style={styles.container}>
        <View style ={styles.upper}>
            <Ionicons color="white" size={144} name="ios-rainy" />
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}> </Text>
            <Text style={styles.subtitle}>for a more info</Text>
        </View>
    </LinearGradient>

}

Weather.propTypes = {
    temp : PropTypes.number.isRequired
    weatherName : PropTypes.string.isReqired
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    upper : {
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        // 여기서 backgrouundColor를 설정 해줘야, 아이콘이 보인다. parent를 생각한것이다.
        backgroundColor: "transparent"
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
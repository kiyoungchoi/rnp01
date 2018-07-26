import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Weather from './Weather';
import { Ionicons } from '@expo/vector-icons';


const API_KEY = "060d212459f65c905cce63110ed59f33";

export default class App extends Component {

  

  state = {
    isLoaded: false,
    error : null,
    temperature : null,
    name : null
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
          this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        })
      }
      );
  }

  _getWeather = (lat, long) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature : json.main.temp,
        name: json.weather[0].main,
        isLoaded: true
      })
    })
  }

  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (

      <SafeAreaView style={styles.safeArea}> 
        <StatusBar  barStyle="light-content" />
        <View style={styles.container}>
        { isLoaded ? (
          <Weather weatherName = {name} temp = {Math.floor(temperature - 273.15)} />) : (
          <View style ={styles.loading}>
            <Text style={styles.loadingText}>getting new weather</Text>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
          </View>)}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    backgroundColor: "red"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItem은 보조축이다. flexDirection:column이면 alignItem은 row이고, 반대의 경우도 같다. 
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: "row",
    flexWrap : "wrap",
    
  },
  loading :{
    flex:1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft:25
  }
  ,loadingText:{
    fontSize:38,
    marginBottom:100
  
  },
  errorText :{
    color : "red",
    backgroundColor: "transparent",
    // marginTop : 40,
    marginBottom: 40
  }
});


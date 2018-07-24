import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Weather from './Weather';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {

  state = {
    isLoaded: false
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error:error
        })
      }
      );
  }

  render() {
    const { isLoaded, error } = this.state;
    return (

      <SafeAreaView style={styles.safeArea}>
        <StatusBar  barStyle="light-content" />
        <View style={styles.container}>
        { isLoaded ? <Weather/> : (
          <View style ={styles.loading}>
            <Text style={styles.loadingText}>getting new weather</Text>
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
  
  }
});


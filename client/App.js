import React from 'react';
import { 
  StyleSheet, 
  Text, 
  StatusBar,
  View } from 'react-native';

import renderif from './components/renderif'

import Browse from './components/Browse';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';

export default class App extends React.Component {
  state = {
    route: '/',
    history: []
  }
  changeRoute = route => {
    const newHistory = this.state.history.concat(this.state.route)
    this.setState({ history: newHistory })
    this.setState({ route })
  }
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Header changeRoute={this.changeRoute} />
        {renderif(this.state.route == '/', <Browse changeRoute={this.changeRoute} />)}
        {renderif(this.state.route.startsWith('/movie/'), <MovieDetails route={this.state.route} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: "center",
    fontSize: 24
  }
});

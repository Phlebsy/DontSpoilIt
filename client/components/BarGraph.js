import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';
import Bar from './Bar';

export default class BarGraph extends Component {
  
  render() {
    const barArray = [];
    for (emotion in this.props.emotions) {
      barArray.push(
        <Bar
          key={emotion}
          barLabel={emotion}
          barLength={this.props.emotions[emotion]}
        />
      );
    }

    return <View style={[styles.graphContainer]}>{barArray}</View>;
  }
}

const styles = StyleSheet.create({
  graphContainer: {
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#4286f4',
    padding: 8,
    borderRadius: 5
  }
});

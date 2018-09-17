import React, { Component } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export default class Bar extends Component {
  render() {
    return (
      <View style={[styles.item]}>
        <Text style={[styles.label]}>
          {this.props.barLabel[0].toUpperCase() + this.props.barLabel.slice(1)} {`(${(this.props.barLength*100).toFixed(1)}%)`}
        </Text>
        <Animated.View
          style={[
            styles.bar,
            { width: new Animated.Value(this.props.barLength * 100 * 4) }
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 5,
    height: 24,
    marginRight: 5,
    marginTop: 2,
    backgroundColor: '#4286f4'
  },
  item: {
    marginBottom: 5,
    paddingHorizontal: 10
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold'
  }
});

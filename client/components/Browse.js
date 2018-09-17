import React, { Component } from 'react'
import axios from 'axios'
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    ScrollView
} from 'react-native'

import MovieCard from './MovieCard'

class Browse extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        axios.get('http://localhost:3000/movies/')
            .then(data => this.setState({movies: data.data}))
            .catch(err => console.log(err))
    }
    render () {
        console.log(this.state)
        return (
            <ScrollView style={styles.scroll}>
                <Text style={styles.title}>Now Showing</Text>
                {this.state.movies.map((movie, index) =>  <MovieCard key={index} movie={movie} changeRoute={this.props.changeRoute} />)}
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        marginBottom: 200,
        // borderTopWidth: 3,
        // borderColor: '#4286f4'
    },
    title: {
        textAlign: 'center',
        fontSize: 28,
        marginTop: 8
    }
})

export default Browse
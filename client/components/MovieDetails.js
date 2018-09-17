import React, { Component } from 'react'
import axios from 'axios'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import BarGraph from './BarGraph'

let sentiment = 0

class MovieDetails extends Component {
    constructor(props) {
        super(props)
        const movieString = this.props.route.substr(7)
        const movie = JSON.parse(movieString)
        this.state = {
            movie,
            emotions: {
                "sadness": 0,
                "joy": 0,
                "fear": 0,
                "disgust": 0,
                "anger": 0
            },
            sentiment: {
                label: 'unknown'
            }
        }
    }
    componentDidMount() {
        const uri = encodeURI(this.state.movie.title)
        axios.get(`http://localhost:3000/twitter/search/${uri}`)
            .then(data => {
                sentiment = data.data.sentiment.score
                this.setState({ 
                    emotions: data.data.emotions,
                    sentiment: data.data.sentiment 
                })
            })
            .catch(err => console.log(err))
    }
    render () {
        const { movie } = this.state
        const label = this.state.sentiment.label
        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Image style={{}} source={{uri: `http://image.tmdb.org/t/p/w185/${movie.poster_path}`}} style={styles.img} />
                    <View>
                        <Text style={styles.title}>{movie.title}</Text>    
                        <Text style={styles.release}>Release Date: {movie.release_date}</Text>    
                        <Text style={styles.avg}>Average TMDB Score: {movie.vote_average}</Text>    
                        <Text style={styles.sentiment}>Overall Impression: <Text style={styles.color}>{label[0].toUpperCase()+label.substr(1)}</Text></Text>    
                    </View>
                </View>
                <Text style={styles.feel}>Twitter Feel</Text>
                <BarGraph emotions={this.state.emotions} />
                <Text style={styles.feel}>Overview</Text>
                <Text style={styles.desc}>{movie.overview}</Text>    
            </View>
        )
    }
}

let color = sentiment >= 0? 'green': 'red'

const styles = StyleSheet.create({
    container: {
        padding: 18,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontFamily: 'Avenir-Light' 
    },
    release: {
        fontFamily: 'Avenir-Light',
        marginBottom: 6
    },
    desc: {
        fontFamily: 'Avenir-Light',
        fontSize: 14,
        marginBottom: 6,
        marginTop: 6
    },
    sentiment: {
        fontFamily: 'Avenir-Light',
        marginBottom: 6,
    },
    color: {
        fontFamily: 'Avenir-Light',
        marginBottom: 6,
        color
    },
    avg: {
        fontFamily: 'Avenir-Light',
        marginBottom: 6
    },
    feel: {
        textAlign: 'center',
        fontFamily: 'Avenir-Light',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 8
    },
    head: {
        flexDirection: 'row',
    },
    img: {
        marginRight: 15,
        marginTop: 15,
        width: 60, 
        height: 90,
    }
})

export default MovieDetails
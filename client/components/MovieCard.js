import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const componentName = (props) => {
    const { movie } = props
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.changeRoute(`/movie/${JSON.stringify(movie)}`)}>
            <Text style={styles.title}>{movie.title}</Text>    
            <Text style={styles.release}>Release Date: {movie.release_date}</Text>    
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderTopWidth: 2,
        borderColor: '#4286f4',
        margin: 10,
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        fontFamily: 'Avenir-Light',
        fontWeight: 'bold'
    },
    release: {
        fontStyle: 'italic',
        fontFamily: 'Avenir-Light',
        marginBottom: 6,
    },
    desc: {
        fontFamily: 'Avenir-Light',
        fontSize: 14,
    }
})

export default componentName
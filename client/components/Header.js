import React from 'react'
import logo from '../img/logo.png'

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
    },
    view: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        borderBottomColor: '#4286f4',
        borderBottomWidth: 3
    },
    text: {
        color: '#000',
        fontSize: 24
    }
})

const componentName = (props) => {
    return (
        <View style={styles.view}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.text} onPress={() => props.changeRoute('/')}>DontSpoil.It</Text>
        </View>
    )
}

export default componentName
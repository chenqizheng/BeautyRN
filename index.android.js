'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';
import {
    StackNavigator, navigate
} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: "Home"
    }
    render() {
        return (<View>
            <Text>HelloWorld,Home</Text>
            <Button onPress={() => { navigate("Detail") }} title="Detail"></Button>
        </View>);
    }
}

class DetailScreen extends React.Component {
    static navigationOptions = {
        title: "Detail"
    }

    render() {
        return <Text style={styles}>HelloWorld,Detail</Text>
    }
}

const app = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: DetailScreen
    }

})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    hello: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },

});


AppRegistry.registerComponent('App', () => app);

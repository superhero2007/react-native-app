import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableHighlight
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions';

import { Actions } from 'react-native-router-flux';

class HomeContainer extends Component {
    componentDidMount() {
        this.props.getQuotes();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>Welcome to the{"\n"}Trivia Challenge!</Text>
                    <Text style={styles.text}>You will be presented{"\n"}with 10 True or False{"\n"}questions.</Text>
                    <Text style={styles.text}>Can you score 100%?</Text>
                    <TouchableHighlight underlayColor='white' onPress={() => Actions.question()}>
                        <Text style={styles.text}>BEGIN</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our components.
// This function makes Redux know that this components needs to be passed a piece of the state
function mapStateToProps(state) {
    return {
        loading: state.quoteReducer.loading
    }
}

// Doing this merges our actions into the components’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (actions/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eee',
        paddingBottom: 30
    },

    header:{
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    text:{
        color: 'black',
        fontSize: 25,
        textAlign: 'center'
    },

    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});
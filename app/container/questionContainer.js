import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions';

import { Actions } from 'react-native-router-flux';

class QuestionContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 1
        };
        this.addAnswer = this.addAnswer.bind(this);
    }

    componentDidMount() {
        this.props.deleteAnswers();
    }

    addAnswer(answer) {
        this.props.addAnswer({
            index: this.state.index,
            answer: answer
        });
        if (this.state.index === this.props.quotes.length) {
            Actions.score();
        } else {
            this.setState({ index: this.state.index + 1 });
        }
    }

    render() {
        const quote = this.props.quotes[this.state.index - 1];
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>{quote.category}</Text>
                </View>
                <View style={styles.questionContainer}>
                    <Text style={styles.text}>{quote.question}</Text>
                </View>
                <Text style={styles.index}>{this.state.index} of {this.props.quotes.length}</Text>
                <View style={styles.actionContainer}>
                    <TouchableOpacity onPress={() => this.addAnswer(true)}>
                        <Text style={styles.text}>True</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.addAnswer(false)}>
                        <Text style={styles.text}>False</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state) {
    return {
        loading: state.quoteReducer.loading,
        quotes: state.quoteReducer.quotes
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (actions/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#eee',
        padding: 10
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

    index:{
        color: 'black',
        fontSize: 25,
        marginTop: 10
    },

    questionContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 30,
        marginTop: 100
    },

    actionContainer:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        flexDirection: 'row',
        width: 200
    }
});
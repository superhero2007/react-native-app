import React, {Component} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as ReduxActions from '../actions';

import { Actions } from 'react-native-router-flux';

import ScoreItem from '../components/ScoreItem'

class ScoreContainer extends Component {
    constructor (props) {
        super(props);
        const success = [];
        for (let i = 0; i < props.quotes.length; i ++) {
            const answer = props.answers.find((answer) => {
                return answer.index === i + 1;
            });

            if ((answer.answer && props.quotes[i].correct_answer === 'True') || (!answer.answer && props.quotes[i].correct_answer === 'False')) {
                success.push(i);
            }
        }

        this.state = {
            success
        };

        this.renderItem = this.renderItem.bind(this);
    }

    render() {
        const { success } = this.state;
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>You scored {"\n"} {success.length} / {this.props.quotes.length}</Text>
                </View>
                <FlatList
                    ref='listRef'
                    data={this.props.quotes}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.question}/>
                <TouchableHighlight underlayColor='white' onPress={() => Actions.question()}>
                    <Text style={styles.text}>PLAY AGAIN?</Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderItem({item, index}) {
        const { success } = this.state;

        return (
            <ScoreItem flag={success.includes(index)} item={item} />
        )
    }
}

// The function takes data from the app current state,
// and insert/links it into the props of our components.
// This function makes Redux know that this components needs to be passed a piece of the state
function mapStateToProps(state) {
    return {
        loading: state.quoteReducer.loading,
        quotes: state.quoteReducer.quotes,
        answers: state.answerReducer.answers
    }
}

// Doing this merges our actions into the components’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (actions/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer);

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#eee'
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
        textAlign: 'center',
        padding: 20
    }
});
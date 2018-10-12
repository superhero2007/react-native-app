import React, {Component} from 'react';

import { Router, Scene } from 'react-native-router-flux';

import HomeContainer from './container/homeContainer'
import QuestionContainer from './container/questionContainer'
import ScoreContainer from './container/scoreContainer'

class Main extends Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="home" component={HomeContainer} title="Home" initial/>
                    <Scene key="question" component={QuestionContainer} title="Question"/>
                    <Scene key="score" component={ScoreContainer} title="Score"/>
                </Scene>
            </Router>
        );
    }
}

//Connect everything
export default Main;
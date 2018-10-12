import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

import HtmlText from 'react-native-html-to-text';

export default class ScoreItem extends Component {

    render() {
        let flag = '';
        if (this.props.flag) {
            flag = <Text style={styles.mark}>+</Text>
        } else {
            flag = <Text style={styles.mark}>-</Text>
        }
        const question = '<span>' + this.props.item.question + '</span>';
        return (
            <View style={styles.row}>
                { flag }
                <View style={styles.list}>
                    <HtmlText style={styles.html} html={question}>
                    </HtmlText>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        padding: 10,
        textAlign: 'left',
        width: '90%'
    },

    html: {
        color: 'grey',
        fontSize: 25
    },

    mark: {
        color: 'grey',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 10,
        width: '10%'
    },

    row: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        flexDirection: 'row'
    }
});

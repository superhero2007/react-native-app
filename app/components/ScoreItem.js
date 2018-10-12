import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class ScoreItem extends Component {

    render() {

        let flag = '';
        if (this.props.flag) {
            flag = <Text style={styles.mark}>+</Text>
        } else {
            flag = <Text style={styles.mark}>-</Text>
        }
        return (
            <View style={styles.row}>
                { flag }
                <Text style={styles.list}>
                    {this.props.item.question}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        color: 'grey',
        fontSize: 25,
        textAlign: 'left',
        padding: 10,
        width: '90%'
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

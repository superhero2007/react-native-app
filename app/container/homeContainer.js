import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

export default class HomeContainer extends Component {

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
                <View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});
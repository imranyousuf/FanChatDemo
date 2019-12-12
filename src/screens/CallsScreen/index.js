import React, { Component } from 'react';
import { View } from 'react-native';
import Vote from './Vote';


import styles from './styles';

export default class CallsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Vote />
            </View>
        );
    }
}



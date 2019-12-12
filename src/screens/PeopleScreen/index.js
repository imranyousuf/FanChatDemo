import React, { Component } from 'react';
import { View, Image } from 'react-native';
import PointsList from 'src/components/PointsList';
import styles from './styles';



export default class PeopleScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <PointsList />
            </View>
        );
    }
}

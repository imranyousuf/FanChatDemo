import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class SearchScreen extends Component {
    render() {
        return (
                <Image source={require('../../assets/images/search.png')} style={styles.backgroundImage} />
        );
    }
}

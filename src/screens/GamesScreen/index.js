import React, { Component } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export default class GamesScreen extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../assets/images/game_screen.png')} style={styles.backgroundImage} />
            </View>
        );
    }
}

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-paper';


import styles from './styles';
import PropTypes from 'prop-types';
import Avatar from '../../components/Avatar/Avatar';

export default class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };
    

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: 'https://i.imgur.com/SXMBaLW.png'}}
                    />
                 
                 <Text>
                    {"\n"}
                    </Text>
                <Button mode="contained"sed color="#3F1D75" onPress={this.onPress}>
                    CONTINUE AS IMRAN YOUSUF
                </Button>
                
            </SafeAreaView>
        );
    }
}

SplashScreen.propTypes = {
    navigation: PropTypes.object
};

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import GroupsItem from '../../components/GroupsList/GroupItem';
import StatusList from 'src/components/StatusList';

import styles from './styles';

const data = [
    {
        name: 'Golden State vs Lakers 12/09',
        last_active: '30 secs ago',
        members: 'Imran, Alex Matts, Adam, William + 320',
        imageUrl: 'https://www.lineups.com/articles/wp-content/uploads/2018/12/lakers-vs-golden-state-warriors-530x295.jpg'
    },
];

export default class MessagesScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('CameraScreen');
    };

    

    render() {
        return (
            <View style={styles.container}>
                <StatusList />
                <Button
                    icon="chat"
                    mode="contained"
                    color="#3F1D75"
                    onPress={() => this.props.navigation.navigate('ChatScreen')}
                >
                    JOIN THE LIVE CHAT!
                </Button>

                <Image source={require('../../assets/images/feed1.jpg')} style={styles.backgroundImage} /> 
                 <Image source={require('../../assets/images/feed2.jpg')} style={styles.backgroundImage} /> 



            

            </View>
        );
    }
}

MessagesScreen.propTypes = {
    navigation: PropTypes.object
};

import React, { Component } from 'react';
import { FlatList } from 'react-native';
import GroupsItem from './GroupItem';
import styles from './styles';

const data = [
    {
        name: 'Golden State vs Lakers 12/09',
        last_active: '30 secs ago',
        members: 'Imran, Alex Matts, Adam, William + 320',
        imageUrl: 'https://www.lineups.com/articles/wp-content/uploads/2018/12/lakers-vs-golden-state-warriors-530x295.jpg'
    },
    {
        name: 'GSW Loyal Fans',
        last_active: '2 days ago',
        members: 'Imran, Alex, Bob, William + 25k',
        imageUrl: 'https://d1si3tbndbzwz9.cloudfront.net/basketball/team/16/logo.png'
    },

];

export default class GroupsList extends Component {
    renderItem = ({ item }) => {
        return <GroupsItem item={item} />;
    };

    render() {
        return (
            <FlatList
                data={data}
                contentContainerStyle={styles.list}
                renderItem={this.renderItem}
                showsVerticalScrollIndicator={false}
                
            />
        );
    }
}

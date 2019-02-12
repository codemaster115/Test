import React, { Component } from 'react';
import {
    View,
    FlatList,
    Image,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import { Header, RadioButton } from '../../components';
import styles from './styles';
import data from './data';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: 0,
            refreshing: false
        }
    }
    renderItem(item) {
        return (
            <View style={styles.itemContainer}>
                <View style={styles.avatarContainer}>
                    <Image source={item.image} style={styles.avatar} />
                </View>
                <View style={styles.itemContent}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.positionText}>{item.position}</Text>
                </View>
            </View>
        )
    }
    filterByGender() {
        let userList = [];

        data.map((user) => {
            switch (this.state.gender) {
                case 1:
                    if (user.gender === 'male') {
                        userList.push(user);
                    }
                    break;
                case 2:
                    if (user.gender === 'female') {
                        userList.push(user);
                    }
                    break;
                default:
                    userList.push(user);
                    break;
            }
        })
        return userList;
    }
    onRefresh() {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 2000)
    }
    render() {
        const { gender } = this.state;
        const userList = this.filterByGender();
        return (
            <View style={styles.container}>
                <Header
                    title='Home'
                />
                <View style={{ flexDirection: 'row' }}>
                    <RadioButton
                        title='Male'
                        checked={gender == 1 ? true : false}
                        onPress={() => this.setState({ gender: gender == 1 ? 0 : 1 })}
                    />
                    <RadioButton
                        title='Female'
                        checked={gender == 2 ? true : false}
                        onPress={() => this.setState({ gender: gender == 2 ? 0 : 2 })}
                    />
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.onRefresh()}
                        />
                    }
                >
                    <FlatList
                        data={userList}
                        extraData={this.state}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            this.renderItem(item)
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

export default Home;
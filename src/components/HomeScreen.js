import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from '../styles/HomeScreen.style';
import MenuBar from './MenuBar';

class HomeScreen extends React.Component {
    constructor() {
        super();
        const state = {
        };
    }

    componentDidMount() {
        //add stuff
    }

    render() {
        return (
            <View style={styles.container}>
                <MenuBar />
            </View>
        );
    }
}

export default HomeScreen;
import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import styles from '../styles/HomeScreen.style';
import MenuBar from './MenuBar';
import '../styles/App.css'

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
            <div id="background">
                <View style={styles.container}>
                    <View style={styles.menuBar}>
                        <MenuBar />
                    </View>
                    <View style={styles.titleBodyContainer}>
                        <View style={styles.titleContainer}r>
                            <Text style={styles.titleText}>Hello</Text>
                            <div id="title-line">
                            </div>
                        </View>
                    </View>
                </View>
            </div>
        );
    }
}

export default HomeScreen;
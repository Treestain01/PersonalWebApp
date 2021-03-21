import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from '../styles/MenuItem.style';

class MenuItem extends React.Component {
    constructor(text) {
        super();
        const state = {
            text: text
        };
    }

    componentDidMount() {
        //add stuff
    }

    render() {
        return (
            <View style={styles.menuContentItem}>
                <Text style={styles.menuContentItemText}>{this.props.text}</Text>
            </View>
        );
    }
}

export default MenuItem;
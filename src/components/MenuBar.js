import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';
import styles from '../styles/MenuBar.style';
import {
    MENU,
    MENU_WHITE,
} from '../constants/Images';

class MenuBar extends React.Component {
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
                <Image source={MENU_WHITE} />
            </View>
        );
    }
}

export default MenuBar;
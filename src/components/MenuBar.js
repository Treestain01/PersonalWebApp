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
import MenuIconWhite from './MenuIconWhite';
import MenuIconBlack from './MenuIconBlack';

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
                <View style={styles.menuIconContainer}>
                    <MenuIconBlack />
                </View>
                <View>

                </View>
            </View>
        );
    }
}

export default MenuBar;
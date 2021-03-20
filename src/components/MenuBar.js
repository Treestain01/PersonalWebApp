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
import MenuIcon from './MenuIcon';

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
                    <MenuIcon />
                </View>
                
            </View>
        );
    }
}

export default MenuBar;
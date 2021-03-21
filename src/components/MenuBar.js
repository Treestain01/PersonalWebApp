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
import MenuItem from './MenuItem';

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
                <View style={styles.menuContentContainer}>
                    <MenuItem text={'HOME'}/>
                    <MenuItem text={'ABOUT ME'}/>
                    <MenuItem text={'PROJECTS'}/>
                    <MenuItem text={'WORK HISTORY'}/>
                </View>
            </View>
        );
    }
}

export default MenuBar;
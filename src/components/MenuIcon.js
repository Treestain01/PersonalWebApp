import React, { useState } from 'react';
import styles from '../styles/MenuIcon.style';
import '../styles/MenuIcon.css';

const MenuIcon = () => {
    return (
        <body id="menu-icon-body">
            <label id="menu-icon-click" for="toggle">
                <input id="toggle" type="checkbox"/>
                <label id="menu-icon-label" for="toggle"></label>
            </label>
        </body>
    );
}

export default MenuIcon;
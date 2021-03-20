import React from 'react';
import '../styles/MenuIconWhite.css';

const MenuIconWhite = () => {
    return (
        <body id="menu-icon-body">
            <label id="menu-icon-click" for="toggle">
                <input id="toggle" type="checkbox"/>
                <label id="menu-icon-label" for="toggle"></label>
            </label>
        </body>
    );
}

export default MenuIconWhite;
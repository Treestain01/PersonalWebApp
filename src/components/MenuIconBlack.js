import React from 'react';
import '../styles/MenuIconBlack.css';

const MenuIconBlack = () => {
    return (
        <body id="menu-icon-body-black">
            <label id="menu-icon-click-black" for="toggle-black">
                <input id="toggle-black" type="checkbox"/>
                <label id="menu-icon-label-black" for="toggle-black"></label>
            </label>
        </body>
    );
}

export default MenuIconBlack;
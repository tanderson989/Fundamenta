import React from 'react';
import Strings from '../constants/Strings'
import '../styles/styles.css';

export default class Header extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="header">
                <div className="header-main-text">{Strings.HeaderText}</div>
                <div className="header-sub-text">{Strings.HeaderSubText}</div>
            </div>
        )
    }
}
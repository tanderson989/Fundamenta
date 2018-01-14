import React from 'react';
import Header from './Header';
import ProgressBar from './ProgressBar';

export default class Application extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header/>
                <ProgressBar/>
            </div>
        )
    }
}
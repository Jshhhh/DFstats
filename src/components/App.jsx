import React from 'react';

import Players from './Players';
import LineGraph from './LineGraph';
import './App.scss';

const App = (props) => {
    return (
        <section className="main-sec">
            <h1 className="header">DF Stats</h1>
            <section className="ui-sec">
                <LineGraph />
                <Players />
            </section>
        </section>
    )
};

export default App;
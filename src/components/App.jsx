import React from 'react';

import Players from './Players';
import Datavis from './Datavis';
import './App.scss';

const App = (props) => {
    return (
        <section className="main-sec">
            <h1 className="header">DF Stats</h1>
            <section className="ui-sec">
                <Datavis />
                <Players />
            </section>
        </section>
    )
};

export default App;
import React from 'react';

import Players from './Players';
import Datavis from './Datavis';
import './App.scss';

const App = (props) => {
    return (
        <section className="main-sec">
            <h1 className="header">DF Stats</h1>
            <section className="ui-sec">
                <Datavis data={[5,10,1,3]} size={[500,250]} />
                <Players />
            </section>
        </section>
    )
};

export default App;
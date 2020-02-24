import React from 'react';
import Select from 'react-select';

import Players from './Players';
import LineGraph from './LineGraph';
import './App.scss';

const App = () => (
  <section className="main-sec">
    <nav>
      <h1 className="header">DF Stats</h1>
    </nav>
    <Select options={[{ value: '1', label: '1' }, { value: 'abadasfdfasdf', label: 'adsfasdfasdfadsf' }]} />
    <section className="ui-sec">
      <Players />
      <LineGraph />
    </section>
  </section>
);

export default App;

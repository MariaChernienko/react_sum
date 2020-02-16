import React from 'react';
import Sum from './components/Sum';
import './App.css';

const params = [
  {
    a: 2, b: 2,
  },
  {
    a: 10, b: 0,
  },
  {
    a: -5, b: 5,
  },
];

const App = () => (
  <div>
    <h1>React sum</h1>
    {params.map(({ a, b }) => <Sum a={a} b={b} />)}
  </div>
);

export default App;

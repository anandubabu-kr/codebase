import React from 'react';
import Home from './Components/home/home.jsx'
import './App.css';
import useStyles from './Components/home/styles.js';

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Home/>
    </div>
  );
}

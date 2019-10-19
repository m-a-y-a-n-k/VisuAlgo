import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Arr from './ds/Array';
import LL from './ds/LinkedList';
import Stack from './ds/Stacks';
import Sieve from './algo/Sieve';
import BinSearch from './algo/BinarySearch';
import Factorial from './algo/Factorial';
import NQueens from './algo/NQueens';
import Exponentiation from './algo/Exponentiation';
import FloodFill from './algo/FloodFill';
// import AllPeaks from './algo/Peak/allPeaks';
import Peak from './algo/Peak';
import Shuffle from './algo/KnuthShuffle';
import './App.css';

function App() {
  return (
    <div className="App">
      <Shuffle />
    </div>
  );
}

export default App;

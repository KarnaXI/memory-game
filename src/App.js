import './App.css';
import React, { useState } from 'react';
import randomizeCharacters from './components/Characters';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  const [clickedCharacters, setClickedCharacters] = useState([]);

  function handleClick(id){
    if(clickedCharacters.includes(id)){
      if(score > bestScore){
        setScore(0)
      }
      else{
        setScore(0);
      }
    }
    else{
      setScore(score+1);
      setBestScore(bestScore+1);
      setClickedCharacters(([...clickedCharacters, id]));
      console.log(clickedCharacters);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='header-title'>
          <h1 className="site-title">Memory Game</h1>
          <div className="score-container">
            <p><strong>Score:</strong> {score}</p>
            <p><strong>Best Score:</strong> {score}</p>
            </div>
        </div>
        
        <button onClick={() => setScore(score + 1)}>Click me</button>
        <div className='cards-container'>
          {randomizeCharacters().map((character) => <Cards key={character.id} character={character} handleClick={handleClick}/>)}
        </div>

      </header>
    </div>
  );
}

export default App;

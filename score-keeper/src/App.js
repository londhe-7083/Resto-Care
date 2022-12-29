import { useEffect, useState } from 'react';
import './App.css';
import logo from "./views/immg/basketball.png";

function App() {
  const[scoreA, setScoreA] = useState(0);
  const[scoreB, setScoreB] = useState(0);

  useEffect(()=>{  
  const a =localStorage.getItem("scoreA");
  const b =localStorage.getItem("scoreB");

  if((a)){
    setScoreA(a);
  }

  if((b)){
    setScoreB(b);
  }
  }, [])

useEffect(()=>{ 
  if(scoreA > 0)
  {
    localStorage.setItem("scoreA", scoreA);
  }
  
  if(scoreB > 0)
  {
    localStorage.setItem("scoreB", scoreB);
  }
  },[scoreA,scoreB])

  
  return (
    <>
    <div className='score-keeper-container' >
            <img src={logo} className="img-basket" />
            <h2 className='score-keeper-heading'> Basketball-Score-keeper </h2>

            <div className='score-card-container'>

              <div className="score-card">
                <h3 className='score-card-heading'>Team A</h3>
                <h6 className='score-card-count'> {scoreA} </h6>
                <div className='button-container'>
                  <button className="score-button" onClick={()=>{setScoreA(scoreA+1)}}>+</button>
                  <button className="score-button" onClick={()=>{setScoreA(scoreA-1)}}>-</button>
                </div>
              </div>

              <div className="score-card">
                <h3 className='score-card-heading'>Team B</h3>
                <h6 className='score-card-count'> {scoreB} </h6>
                <div className='button-container'>
                  <button className="score-button" onClick={()=>{setScoreB(scoreB+1)}}>+</button>
                  <button className="score-button" onClick={()=>{setScoreB(scoreB-1)}}>-</button>
                </div>
              </div>


            </div>

           
    </div>
    </>

  );
}

export default App;

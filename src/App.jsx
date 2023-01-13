import './App.css'
import { useState, useEffect } from 'react'
import AllData from './components/AllData'
import info from "./data/users.json"
import random from "./assets/icon/shuffle.png"




function getRandomNum(limit){
    return Math.floor(Math.random()*limit);
}

function App() {

  const [data, setData] = useState(info[getRandomNum(info.length)])
  const colors = ["#FDB137", "#785964", "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866","#FFB4A2", "#79616F", "#EAB595" ]

   useEffect(()=>{
        let color = colors[ getRandomNum(colors.length) ]; 
        document.body.style = `background-color:${color};color:${color};`;
       },[data]); 

  return (
    <div className="App">
      <AllData data={data} />
      <button  className="button" onClick={()=>setData(info[getRandomNum(info.length)])}  
      ><img className="icon_2" src={random} alt="" /></button>
    
     
    </div>
  );
}

export default App;
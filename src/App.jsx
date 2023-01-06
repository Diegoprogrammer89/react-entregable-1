import './App.css'
import { useState, useEffect } from 'react'
import AllData from './components/AllData'
import info from "./data/users.json"

function App() {

  const [data, setData] = useState(info[4])

  useEffect(() => {
    fetch( )

  },[])


  return (
    <div className="App">
      <AllData data={data} />
    </div>
  );
}


export default App;
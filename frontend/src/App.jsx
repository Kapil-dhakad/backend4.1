import React from 'react'
import Approuter from './components/Approuter'
import { BrowserRouter} from "react-router-dom";


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Approuter/>
      </BrowserRouter>
    </div>
  )
}

export default App

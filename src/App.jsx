import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import NewsCards from './Components/NewsCards';
import WebBottom from './Components/WebBottom';
const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar 
      setCategory={setCategory}/>

      <NewsCards
      category={category}/>

      <WebBottom/>
    </div>
  )
}


export default App;

import { useState } from 'react';
import Notes from './components/Notes';
import './App.css'

function App() {
  const [notes,setNotes]=useState([
    {
    id:1,
    text:"Check my 1st assignment in React Advance."
  },
  {
    id:2,
    text:"Check my 2nd assignment in React Advance."
  }
])

  return (
    <div> 
      <Notes notes={notes} setNotes={setNotes}>

      </Notes>
    </div>
  )
}

export default App

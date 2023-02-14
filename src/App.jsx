import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [user, setUser] = useState('balub')

   useEffect (() => {
    axios.get('https://api.github.com/users/' + user)
    .then(res => {
      console.log(res.data)
      
    })
    .catch(err => {
      console.log(err)
    })
  } , [])

  return (
    <div>
       <input 
      type='text' 
      value={user} 
      onChange={e => setUser(e.target.value)}/>
    </div>
  )
}

export default App

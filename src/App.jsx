import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

const addValue =()=> {
 console.log("clicked" , counter)
  counter = counter + 1;
  setCounter(counter);
}
const removeValue =()=> {
 console.log("clicked" , counter)
  counter = counter - 1;
  setCounter(counter);

}
  return (
    <>
    <h1>chai or react</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    onClick={addValue}
    > Add Value {counter}</button>
<br />
    <button
    onClick={removeValue}
    > Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App

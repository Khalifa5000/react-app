
import './App.css';
import {useState} from "react";


function App() {
const [ name, setName] = useState("Mohamed");
const [ age , setAge]  = useState(28);

const [count, setCount] = useState(0);
const [subtraction, setSubtraction] = useState(count);
const [theme, setTheme] = useState("")

const changeAge = () => {
  setAge(33)
}

const addCount = () => { 
  setCount(count + 1) ;
 }

 const changeSubtraction = () => {
  addCount
  setSubtraction( count - 1)
 }

  return (
    <div className={`App ${theme}`}>
      <div className="card">
        <button  onClick ={() =>{setTheme("light")}} style={{marginRight: "26px" }}>light</button>
        <button  onClick ={() =>{setTheme("dark")}} style={{marginRight: "26px"}}>dark</button>
        <button  onClick ={() =>{setTheme("grey")}} style={{marginRight: "26px"}}>grey</button>
        <button  onClick ={() =>{setTheme("pink")}}>pink</button>
        <h2>My name is {name} </h2>
        <button onClick={ ()=>{ setName("Khalifa")} } >Change name</button>
      </div>

      <div>
        <h2> My age is {age}</h2>
        <button onClick={ changeAge }>Change age</button>
      </div>

      <div>
        <br/>
        <button onClick={addCount}> Count {count} </button>
      </div>

      <div>
        <br/>
        <button onClick={changeSubtraction}> Subtraction {subtraction} </button>
      </div>

    </div>
  )
}

export default App

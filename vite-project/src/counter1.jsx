import {useState} from 'react'

export default function Counter1(){
    const [count,setCount]=useState(0)
    const handleInCrement=()=>{
        setCount(count+1)
    }
    const handleDiCrement=()=>{
        setCount(count-1)
    }
        return(
            <div className="container">
                <h1>Counter App</h1>
                <h2>Count:{count}</h2>
                <div className="button-box">
                <button onClick={handleInCrement}>InCrement</button>
                <button onClick={handleDiCrement}
                       disabled={count===0?true:false}>DiCrement</button>
                       </div>
            </div>
        )
    }

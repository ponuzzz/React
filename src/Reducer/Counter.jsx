import { useReducer } from "react";
import CounterReducer from "./CounterReducer";


export default function Counter() {
    const [state, disptach] = useReducer(CounterReducer, { count: 0 });
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Count : {state.count}</h1>
            <button className="btn" onClick={() => disptach({ type: "increment" })}>+</button>
            <button  className="btn" onClick={() => disptach({ type: "decrement" })}>-</button>
            <button className="btn" onClick={() => disptach({ type: "reset" })}>reset</button>

        </div>
    )
}





import React from "react";
import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "./CounterAction";

function Counter() {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    return (
        <div className="counter-app">
            <h1>Counter Application</h1>
            <div className="counter">
                <button className="increment" onClick={()=>dispatch(Increment())}>Increment</button>
                    <span>{counter}</span>
                <button className="decrement" onClick={()=>dispatch(Decrement())}>Decrement</button>
            </div>
        </div>
    );
}

export default Counter;
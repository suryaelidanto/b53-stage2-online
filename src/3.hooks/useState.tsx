import { useState } from "react";

export default function ExampleUseState() {
    const [counter, setCounter] = useState<number>(0)

    function add() {
        setCounter((prev) => prev + 1)
    }

    function subtract() {
        setCounter((prev) => prev - 1)
    }


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    )
}
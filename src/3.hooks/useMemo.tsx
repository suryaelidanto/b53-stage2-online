import { useMemo, useState } from "react";

export default function ExampleUseMemo() {
    const [counter, setCounter] = useState<number>(10)

    const angka = useMemo(() => {
        return counter + 10
    }, [counter])

    function add() {
        setCounter((prev) => prev + 1)
    }

    function subtract() {
        setCounter((prev) => prev - 1)
    }


    return (
        <div>
            <h1>{angka}</h1>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
        </div>
    )
}
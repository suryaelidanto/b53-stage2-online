import { useCallback, useState } from "react";

export default function ExampleUseCallback() {
    const [counter, setCounter] = useState<number>(5)

    // const hello = useCallback(() => {

    // }, [])

    const add = useCallback(() => {
        setCounter((prev) => prev + 1)
    }, [])

    const decrement = useCallback(() => {
        setCounter((prev) => prev - 1)
    }, [])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
import { useState, useEffect } from "react";

export default function ExampleUseEffect() {
    // const [count, setCount] = useState<number>(0)

    // useEffect(() => {
    //     //componentDidMount
    //     setInterval(() => {
    //         setCount((prev) => prev + 1)
    //     }, 1000)


    //     // componentWillUnmount
    //     return () => {
    //         console.log("kamu pergi dari komponenmu")
    //     }
    // }, [])
    const [counter, setCounter] = useState<number>(0)
    const [counter2, setCounter2] = useState<number>(0)

    useEffect(() => {
        setCounter2((prev) => prev + 10)
    }, [counter])

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <h1>Counter 2 : {counter2}</h1>

            <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
        </div>
    )
}
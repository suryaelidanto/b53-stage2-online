import React from "react"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const Home = () : React.JSX.Element => {
  const [count, setCount] = React.useState<number>(0)
  
  const add = () : void => {
    setCount(count + 1)
  }
  console.log(count)

  return (
    <>
      <Navbar />

      <p>{count}</p>

      <button onClick={add}>click here</button>

      <Footer />
    </>
  )
}

export default Home


// embed
import { useState } from "react"


function App() {
  const [color , setColor] = useState("Olive") // useState Olive is the defalt value whenever we refres the page olive color apperas coz this is default
    // here color is current state value
    // setColor is A function to update the state 
    // and, olive is initial value of State
    
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={ () => { // onClick wants the function not the return value of funtion, it handles the the click event
          setColor("red")
        }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "red"}}>Red</button>
        <button onClick={() => {
          setColor("blue")
        }}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "blue"}}>Blue</button>
        <button onClick={ () => {
          setColor("green")
        }} 
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "green"}}>Green</button>
        <button onClick={() => {
          setColor("purple")
        }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "purple"}}>purple</button>
         <button onClick={() => {
          setColor("yellow")
        }} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor : "yellow"}}>yellow</button>
         <button onClick={() => {
          setColor("black")
        }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "black"}}>black</button>
         <button onClick={() => {
          setColor("orange")
        }} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "orange"}}>orange</button>
         <button onClick={() => {
          setColor("white")
        }} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor : "white"}}>white</button>
      </div>
      </div>
    </div>
  )
}

export default App

import Profile from "./Components/Profile"
import UserConetxtProvider from "./Context/ContextProvider"
import React from "react"
import Login from "./Components/Login"



function App() {

  return (
    <UserConetxtProvider>
      <h1>Context API Login Password</h1>
      <Login />
      <Profile />
    </UserConetxtProvider>
  )
}

export default App

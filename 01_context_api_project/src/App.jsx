import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'

function App() {

  return (
    <UserContextProvider>
      <h1 className="text-3xl text-center">React Context Api Crash</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

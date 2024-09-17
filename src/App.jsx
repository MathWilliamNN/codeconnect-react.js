import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from "./Pages/DefaultPage"
import Feed from "./Pages/Feed"
import Profile from "./Pages/Profile"
import AboutUs from "./Pages/AboutUs"
import Logout from "./Pages/Logout"


function App() {

  return (
    <BrowserRouter>
      <DefaultPage />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/info" element={<AboutUs />} />
        <Route path="/exit" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from "./Pages/DefaultPage"
import Feed from "./Pages/Feed"
import Profile from "./Pages/Profile"
import AboutUs from "./Pages/AboutUs"
import Logout from "./Pages/Logout"
import Home from "./Pages/Home"
import styled from "styled-components"
import { DataContextProvider } from "./Context"

const StyledAppContainer = styled.main`
  display: flex;
  gap: 32px;
`

function App() {

  return (
    <BrowserRouter>
      <StyledAppContainer>
        <DataContextProvider>
          <DefaultPage />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/info" element={<AboutUs />} />
            <Route path="/exit" element={<Logout />} />
          </Routes>
        </DataContextProvider>
      </StyledAppContainer>
    </BrowserRouter>
  )
}

export default App

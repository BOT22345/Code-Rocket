import { Route,Routes } from "react-router-dom"
import HomePage from "./pages/Home.jsx"
import AboutUs from "./pages/AboutUs.jsx"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
      </Routes>
    </>
  )
}

export default App

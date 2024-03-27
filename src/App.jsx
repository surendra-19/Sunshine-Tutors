import Header from "./components/header/Header"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Courses from './components/course_details/Courses'
import Tutions from './components/tutions/Tutions'
import Home from "./components/home/Home"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route path="" element={<Home/>} />
            <Route path="tutions" element={<Tutions/>} />
            <Route path="courses" element={<Courses/>} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

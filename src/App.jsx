import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Profile from './pages/Profile'
import Project from "./pages/Project"
import Contact from './pages/contact'
import Nav from './cmp/Navbar'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Profile />} ></Route>
    <Route path='/projects' element={<Project />} ></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
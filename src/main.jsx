import {createRoot} from 'react-dom/client'
import Navbar from './Components/Navbar.jsx'
import './assets/css/index.css'
import  Hom from  './Components/Home.jsx'
// import { Home } from 'lucide-react'
//import { Import } from 'lucide-react'

createRoot(document.getElementById('root')).render(
 
  <>
  <Navbar />
  <Hom /></>
  
)

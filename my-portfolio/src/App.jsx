import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import AboutMe from './pages/aboutMe/AboutMe'
import './App.css';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='d-flex position-relative bg-dark'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutMe' element={<AboutMe/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import Blog from './pages/blog/Blog'
import './App.css';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div className='d-flex'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/work' element={<Work/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
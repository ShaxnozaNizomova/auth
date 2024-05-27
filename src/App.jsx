import './App.css'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
import NotFound from './pages/not-found/NotFound'
import Admin from './pages/admin/Admin'
import Auth from './pages/auth/Auth'
import Navbar from './components/navbar/Navbar'
import Topnavbar from './components/navbar/Topnavbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <Topnavbar/>
    <Navbar/>
     <Routes>
      <Route path='/register' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Auth/>}>
      <Route path='/admin' element={<Admin/>}>
      </Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
    </>
  )
}

export default App

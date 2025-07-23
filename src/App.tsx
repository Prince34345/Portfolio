import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from '../components/navbar/navbar';
import HomePage from '../components/homepage/homepage';
import About from '../components/about/about';
import Footer from '../components/footer/footer';
import Service from '../components/services/service';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import Projects from '../components/projects/projects';

import { Toaster } from 'sonner';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
         <Route path='/' element={<HomePage/>}/>  
         <Route path='/about' element={<About/>}/>   
         <Route path='/service' element={<Service/>}/>   
         <Route path='/skills' element={<Skills/>}/>   
         <Route path='/contact' element={<Contact/>}/> 
         <Route path='/projects' element={<Projects/>}/>   
      </Routes>
      <Footer/>
    </BrowserRouter>
     <Toaster/>
    </>
  )
}

export default App

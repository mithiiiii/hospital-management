import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"
import { Route, Routes } from "react-router-dom"
import { analytics } from "./Helper/Index"
import { logEvent } from "firebase/analytics"
import Chat from "./Pages/Chat"
function App() {
   
    if (analytics){
      logEvent(analytics,'Init...')
    
   }


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/chat" element={<Chat/>}/>

      </Routes>
      <Footer />

    </div>
  )

}

export default App
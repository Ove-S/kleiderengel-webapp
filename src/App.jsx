import "./App.css"
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Form from "./components/Form";
import Imprint from "./components/Imprint";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";


export default function App() {
  return (
    <>
      <Header/>
        <main className="container">
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/form' element={<Form/>}/>
              <Route path='/imprint' element={<Imprint/>}/>
              <Route path='/privacy' element={<Privacy/>}/>
          </Routes>
        </main>
      <Footer/>
    </>
  )
}
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Trending from './components/Trending'
import Store from './components/Store'
import Editor from './components/Editor'
import Detail from './components/Detail'
import Footer from './components/Footer'

import './css/Navbar.css'
import './css/Trending.css'
import './css/Store.css'
import './css/Editor.css'
import './css/Footer.css'
import './App.css'

// Ana səhifədə görünəcək komponentlər qrupu
const Home = () => {
  return (
    <>
      <Trending />
      <Store />
      <Editor />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className="body">
      {/* Navbar bütün səhifələrdə yuxarıda sabit qalır */}
      <Navbar />

      <Routes>
        {/* Ana səhifə (/) */}
        <Route path="/" element={<Home />} />

        {/* Detal səhifəsi (/detail) */}
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  )
}

export default App
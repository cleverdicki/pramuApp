import React from 'react'
import Contact from './Pages/Contact/contact'
import Home from './Pages/Home/home'
import JoinUs from './Pages/JoinUs/join-us'
import Order from './Pages/Registration/order'
import PackageBersih from './Pages/Package-Option/Package-Bersih/package-bersih'
import PackageAntar from './Pages/Package-Option/Package-Antar/package-antar'
import PackageLengkap from './Pages/Package-Option/Package-Lengkap/package-lengkap'
import Pricing from './Pages/Pricing/pricing'
import Registration from './Pages/Registration/registration'
import Thanks from './Pages/Thanks/thanks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/package-bersih" element={<PackageBersih />} />
        <Route path="/package-antar" element={<PackageAntar />} />
        <Route path="/package-lengkap" element={<PackageLengkap />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  )
}

export default App
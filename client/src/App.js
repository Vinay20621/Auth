import React from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login'
import NoPages from './pages/NoPages'

import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
	return (
		<div>
			<BrowserRouter>
       <Routes>
				<Route path="/" element={<Login/>} />
				<Route path="/signin" element={<Register/>} />
				<Route path="/home" element={<Home/>} />
        <Route path="*" element={<NoPages/>}/>
        </Routes>
			</BrowserRouter>

      
		</div>
	)
}

export default App

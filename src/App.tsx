import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'
import Home from './pages/home/Home'

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<div className="min-h-[80vh]">
					<Routes>
						<Route path="/home" element={<Home />} />
						<Route path="/"	element={<Cadastro />}
						/>
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App

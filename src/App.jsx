import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Layout from './components/Layout'
import ProductsAdd from './pages/Accounts/ProductsAdd'
import ProtoctedRoute from './components/ProtoctedRoute'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>

          <Route element={<Layout />}>

            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

            <Route element={<ProtoctedRoute />}>
              <Route path='/add' element={<ProductsAdd />} />
            </Route>

          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App

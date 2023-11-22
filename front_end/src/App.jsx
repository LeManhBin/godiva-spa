import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import HomePage from './pages/HomePage'
import SuccessPage from './pages/SuccessPage'
import DashboardPage from './pages/DashboardPage'
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import CustomerPage from './pages/CustomerPage'
import LoginPage from './pages/LoginPage'
import PriceListPage from './pages/PriceListPage'
import ServicePage from './pages/ServicePage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path='banggia' element={<PriceListPage/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<DashboardPage/>}/>
            <Route path='customer' element={<CustomerPage/>}/>
            <Route path='service' element={<ServicePage/>}/>
          </Route>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/success' element={<SuccessPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

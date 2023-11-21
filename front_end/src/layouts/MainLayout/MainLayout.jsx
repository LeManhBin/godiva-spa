import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import RegisterModal from '../../components/RegisterModal'
import { useContext } from 'react'
import { WebContext } from '../../contexts/Provider/ContextProvider'

const MainLayout = () => {
  const [state] = useContext(WebContext)

  return (
    <>
        <Header/>
        <div className='my-20'>
            <Outlet/>
            {
              state.isOpenRegisterModal &&
              <RegisterModal/>
            }
        </div>
        <Footer/>
    </>
  )
}

export default MainLayout
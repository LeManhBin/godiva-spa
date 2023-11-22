import { useContext, useState } from "react"
import { GrClose } from "react-icons/gr"
import { BiMenuAltRight } from "react-icons/bi";
import { WebContext } from "../../contexts/Provider/ContextProvider";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpenHeader, setIsOpenHeader] = useState(false)
  const [state, dispatch] = useContext(WebContext)
  const navigate = useNavigate()
  const userData =  JSON.parse( sessionStorage.getItem("user"));

  const handleToggleHeader = () => {
    setIsOpenHeader(!isOpenHeader)
  }

  const handleCloseHeader = () => {
    setIsOpenHeader(false)
  }

  const handleOpenRegisterModal = () => {
    if(userData) {
      navigate("/banggia")
    } else {
      dispatch('TOGGLE_REGISTER')
    }
  }

  return (
    <header className="fixed z-10 left-0 right-0 top-0 h-20 bg-white max-xl:px-5">
      {
        isOpenHeader &&
        <div className="fixed bg-black inset-0 opacity-60" onClick={handleToggleHeader}></div>
      }
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full">
        <div>
          <h1 className="text-yellow-300 text-3xl">Godiva</h1>
        </div>
        <ul className={`flex items-center gap-10 max-xl:gap-5 max-lg:flex-col max-lg:gap-10 max-lg:text-xl max-lg:bg-white max-lg:w-[50%] max-sm:w-[80%] max-lg:h-screen max-lg:shadow max-lg:py-20 max-lg:absolute ease-in-out duration-300 z-50 ${isOpenHeader ? 'max-lg:right-0 max-lg:top-0 max-lg:bottom-0' : 'max-lg:right-[-100%]'}`}>
          <GrClose size={30} color="#8D25C4" className="absolute top-5 left-5 lg:hidden" onClick={handleToggleHeader}/>
          <li className="cursor-pointer font-medium" >
            <a href="/#" onClick={handleCloseHeader}>Ưu Đãi</a>
          </li>
          <li className="cursor-pointer font-medium" >
            <a href="/#dichvu" onClick={handleCloseHeader}>Dịch Vụ</a>
          </li>
          <li className="cursor-pointer font-medium" >
            <a href="/#congnghe" onClick={handleCloseHeader}>Công Nghệ</a>
          </li>
          <li className="cursor-pointer font-medium" >
            <a href="/#khachhang" onClick={handleCloseHeader}>Khách Hàng</a>
          </li>
          <li className="cursor-pointer font-medium" >
            <a href="/#doingubacsi" onClick={handleCloseHeader}>Đội Ngũ Bác Sĩ</a>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <button className="bg-[#8D25C4] text-white px-8 py-2.5 rounded-full font-semibold" onClick={handleOpenRegisterModal}>Bảng Giá</button>
          <BiMenuAltRight size={30} className="lg:hidden" onClick={handleToggleHeader}/>
        </div>
      </div>
    </header>
  )
}

export default Header
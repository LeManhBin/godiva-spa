import { BsStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export const SuccessPage = () => {
    const navigate = useNavigate()

    const handleBackHome = () => {
        navigate("/")
    }
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="w-[400px] h-[250px] p-4 bg-white flex flex-col items-center gap-2.5 rounded-lg shadow-lg">
            <h1 className="flex items-center text-2xl font-bold">Đăng ký ưu đãi thành công <BsStars color="#F4CE14"/></h1>
            <p className="text-center font-medium">Cảm ơn quý khách đã chọn dịch vụ của Godiva</p>
            <p className="text-center font-medium">Đội ngũ tư vấn của Godiva liên hệ quý sách trong thời gian sớm nhất</p>
            <button onClick={handleBackHome} className="bg-[#8D25C4] text-white font-bold px-2.5 py-1.5 rounded-full mt-2">Quay lại trang chủ</button>
        </div>
    </div>
  )
}

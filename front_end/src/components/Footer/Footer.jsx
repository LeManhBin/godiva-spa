import { GrMail, GrMapLocation } from "react-icons/gr";
import { BsTelephoneFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import IncentiveForm from "./components/IncentiveForm";
import logo from "../../assets/images/logo_godiva.jpg"
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#8D25C4] w-full mx-auto">
        <div className="max-w-7xl mx-auto py-5 text-white flex justify-between flex-wrap gap-5 max-xl:px-5">
            <div className="flex-1">
                <img src={logo} alt="" className="w-20 h-20 rounded-full"/>
                <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro commodi repellat pariatur optio itaque maxime doloribus facere iusto repellendus numquam consectetur, exercitationem, nostrum nisi necessitatibus eligendi unde esse atque ab?</p>
                <p className="font-semibold italic text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. <Link to="/login">Đăng nhập</Link></p>
            </div>
            <div className="flex-1 flex justify-center">
                <div>
                    <h3 className="uppercase font-semibold mb-5">Thông tin liên hệ:</h3>
                    <div className="flex items-start gap-1.5 mb-2.5">
                        <GrMapLocation size={20}/>
                        <p className="text-sm font-medium">89 Lê Đình Lý, phường Vĩnh Trung, Quận Thanh Khê, Tp Đà Nẵng</p>
                    </div>
                    <div className="flex items-start gap-1.5 mb-2.5">
                        <BsTelephoneFill size={20}/>
                        <p className="text-sm font-medium">0911110562</p>
                    </div>
                    <div className="flex items-start gap-1.5 mb-2.5">
                        <GrMail  size={20}/>
                        <p className="text-sm font-medium">Thammyhanquocgodiva@gmail.com</p>
                    </div>
                    <div className="flex items-start gap-1.5 mb-2.5">
                        <GoClockFill  size={20}/>
                        <div>
                            <p className="text-sm font-medium">Thời gian làm viêc:</p>
                            <p className="text-sm font-medium">Từ 8:30 đến 19:30 hàng ngày</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <IncentiveForm/>
            </div>
        </div>
    </div>
  )
}

export default Footer
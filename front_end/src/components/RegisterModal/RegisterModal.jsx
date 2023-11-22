import { useContext, useState } from "react";
import { InputElement } from "../InputElement/InputElement"
import { GrClose } from "react-icons/gr";
import { WebContext } from "../../contexts/Provider/ContextProvider";
import { fetchRegister } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import bannerRegister from "../../assets/images/bannerRegister.jpg"
export const RegisterModal = () => {
    const [formState, setFormState] = useState({
        name: "",
        phoneNumber: ""
    })
    const [state, dispatch] = useContext(WebContext)
    const navigate = useNavigate()
    const handleClose = () => {
        dispatch({type: "CLOSE_REGISTER", payload: false})
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const registerMutation = useMutation({
        mutationFn: (payload) => fetchRegister(payload)

    })

    const handleSubmit =  (e) => {
        e.preventDefault()
        registerMutation.mutate(formState, {
            onSuccess: (formResponsive) => {
                if(formResponsive.status == 200) {
                    navigate("/success")
                    sessionStorage.setItem("user", JSON.stringify(formState))
                }
            },
            onError: () => {
                toast.error("Có lỗi xãy ra")
            }
        })
    }

  return (
    <div className="fixed z-50 inset-0 h-full flex items-center justify-center ">
        <div className="bg-black opacity-75 w-full h-full" onClick={handleClose}></div>
        <div className="absolute w-[350px] shadow-xl z-40 bg-white rounded-lg overflow-hidden">
            <div className="absolute right-2.5 top-2.5 cursor-pointer" onClick={handleClose}>
                <GrClose size={24} color="#8D25C4"/>
            </div>
            <div className="h-[400px] bg-slate-300">
                <img src={bannerRegister} alt="" className="w-full h-full object-cover "/>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2.5 p-5">
                <InputElement label="Họ và tên" placeholder="Nhập họ và tên" required={true} value={formState.name} onChange={handleOnChange} name="name"/>
                <InputElement label="Số điện thoại" placeholder="Nhập số điện thoại" required={true} value={formState.phoneNumber} onChange={handleOnChange} name="phoneNumber"/>
                <button type="submit" className="px-2.5 py-1.5 bg-[#8D25C4] text-white rounded font-medium">
                    Đăng ký ngay
                </button>
            </form>
        </div>
    </div>
  )
}

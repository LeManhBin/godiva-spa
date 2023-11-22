import { useContext, useState } from "react";
import { InputElement } from "../InputElement/InputElement"
import { GrClose } from "react-icons/gr";
import { WebContext } from "../../contexts/Provider/ContextProvider";
import { fetchRegister } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

export const RegisterModal = () => {
    const [formState, setFormState] = useState({
        name: "",
        phoneNumber: ""
    })
    const [state, dispatch] = useContext(WebContext)
    const navigate = useNavigate()
    const handleClose = () => {
        dispatch("TOGGLE_REGISTER")
    }

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const registerMutation = useMutation({
        mutationFn: (payload) => {
            fetchRegister(payload)
        },
        onSuccess: () => {
            navigate("/success")
            localStorage.setItem("user", JSON.stringify(formState))
            dispatch("TOGGLE_REGISTER")
            setFormState({
                name: "",
                phoneNumber: ""
            })
        }
    })

    const handleSubmit =  (e) => {
        e.preventDefault()
        registerMutation.mutate(formState)
    }

  return (
    <div className="fixed z-50 inset-0 h-full flex items-center justify-center">
        <div className="bg-black opacity-75 w-full h-full" onClick={handleClose}></div>
        <div className="absolute w-[350px] shadow-xl z-40 bg-white">
            <div className="absolute right-2.5 top-2.5 cursor-pointer" onClick={handleClose}>
                <GrClose size={24} color="#8D25C4"/>
            </div>
            <div className="h-[400px] bg-slate-300">
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

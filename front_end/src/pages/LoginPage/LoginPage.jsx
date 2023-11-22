import { useState } from "react"
import InputElement from "../../components/InputElement"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { fetchLogin } from "../../api/auth.api"
import { toast } from "react-toastify"

export const LoginPage = () => {
    const navigate = useNavigate()

    const [loginState, setLoginState] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setLoginState({
            ...loginState,
            [name] : value
        })
    }
    
    const loginMutation = useMutation({
        mutationFn: (state) => fetchLogin(state)
    })

    const handleLogin = (e) => {
        e.preventDefault()
        loginMutation.mutate(loginState, {
            onSuccess: (loginResponse) => {
                if(loginResponse?.data.status === 200) {
                    navigate("/admin")
                    toast.success("Đăng nhập thành công")
                    localStorage.setItem("auth", JSON.stringify(loginResponse?.data.data))
                    localStorage.setItem("token", JSON.stringify(loginResponse?.data.token))
                }
            },
        })        
    }
  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center items-center px-5">
        <div className="w-[500px] h-max bg-white px-10 py-5 rounded-lg">
            <h1 className="text-center text-2xl font-semibold">Đăng nhập</h1>
            <form action="" className="flex flex-col gap-2.5" onSubmit={handleLogin}>
                <InputElement label="Tài khoản" name="email" placeholder="Nhập tài khoản" required={true} value={loginState.email} onChange={handleOnChange}/>
                <InputElement label="Mật khẩu" type="password" name="password" placeholder="Nhập mật khẩu" required={true} value={loginState.password} onChange={handleOnChange}/>
                <button type="submit" className="px-2.5 py-1.5 bg-[#8D25C4] font-semibold text-white rounded">Đăng nhập</button>
            </form>
        </div>
    </div>
  )
}

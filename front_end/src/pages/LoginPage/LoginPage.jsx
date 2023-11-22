import { useState } from "react"
import InputElement from "../../components/InputElement"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const navigate = useNavigate()

    const [loginState, setLoginState] = useState({
        account: "",
        password: ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setLoginState({
            ...loginState,
            [name] : value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        navigate("/admin")
    }
  return (
    <div className="w-screen h-screen bg-gray-500 flex justify-center items-center px-5">
        <div className="w-[500px] h-max bg-white px-10 py-5 rounded-lg">
            <h1 className="text-center text-2xl font-semibold">Đăng nhập</h1>
            <form action="" className="flex flex-col gap-2.5" onSubmit={handleLogin}>
                <InputElement label="Tài khoản" name="account" placeholder="Nhập tài khoản" required={true} value={loginState.account} onChange={handleOnChange}/>
                <InputElement label="Mật khẩu" type="password" name="password" placeholder="Nhập mật khẩu" required={true} value={loginState.password} onChange={handleOnChange}/>
                <button type="submit" className="px-2.5 py-1.5 bg-[#8D25C4] font-semibold text-white rounded">Đăng nhập</button>
            </form>
        </div>
    </div>
  )
}

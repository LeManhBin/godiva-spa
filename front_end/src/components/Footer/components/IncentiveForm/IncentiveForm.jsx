import { useMutation } from "@tanstack/react-query"
import InputElement from "../../../InputElement"
import { fetchRegister } from "../../../../api/user.api"
import { toast } from "react-toastify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const IncentiveForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    note: ""
  })
  const navigate = useNavigate()

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

  const handleSubmit = (e) => {
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
    <div className="p-5 bg-white flex flex-col gap-2.5 rounded-md">
        <div className="text-center">
            <h2 className="text-xl text-[#8D25C4] uppercase font-semibold">Đăng ký nhận ưu đãi</h2>
            <p className="text-xs text-black">*Chỉ áp dụng cho 20 khách hàng đăng ký đầu tiên</p>
        </div>
        <form action="" className="flex flex-col gap-2.5 " onSubmit={handleSubmit}>
            <InputElement label="Họ và Tên" placeholder="Nhập họ và tên" required={true} name="name" onChange={handleOnChange}/>
            <div className="flex flex-wrap gap-2.5">
                <InputElement label="Số điện thoại" required={true} placeholder="Nhập số điện thoại" name="phoneNumber" onChange={handleOnChange}/>
                <InputElement type="email" label="Email" required={false} placeholder="Nhập email" name="email" onChange={handleOnChange}/>
            </div>
            <InputElement label="Lời nhắn" required={false} placeholder="Để lại lời nhắn cho chúng tôi" name="note" onChange={handleOnChange}/>
            <button type="submit" className="uppercase bg-[#8D25C4] py-1.5 text-sm font-semibold rounded">Nhận ưu đãi</button>
        </form>
    </div>
  )
}

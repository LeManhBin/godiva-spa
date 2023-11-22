
import InputElement from "../../components/InputElement"
import Heading from "./components/Heading/Heading"
import bannerImage from "../../assets/images/banner_godiva.jpg"
import homeImage from "../../assets/images/home_godiva.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import {customerExperience, technicians} from "../../constants/FakeData"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useMutation } from "@tanstack/react-query";
import { fetchRegister } from "../../api/user.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

export const HomePage = () => {
    const navigate = useNavigate()
    const [formState, setFormState] = useState({
        name: "",
        phoneNumber: "",
    })

    const userData = sessionStorage.getItem("user");
    const parsedUserData = userData ? JSON.parse(userData) : {};
    const namePlaceholder = parsedUserData.name || "Nhập họ và tên";
    const phonePlaceholder = parsedUserData.phoneNumber || "Nhập số điện thoại"

    const promotionMutation = useMutation({
        mutationFn: (formData) => fetchRegister(formData)
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        promotionMutation.mutate(formState, {
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
    <div className="bg-[#EDEAFF] pb-20">
        <div className="">
            <img src={bannerImage} alt="" className="w-full object-cover"/>
            <form onSubmit={handleSubmit} className="flex justify-between items-center gap-5 max-xl:flex-col max-xl:gap-2.5 max-w-7xl mx-auto bg-[#8D25C4] shadow p-5">
                <p className="uppercase font-bold text-white">Nhận ưu đại ngay</p>
                <div className="flex gap-5 flex-grow max-[450px]:flex-wrap">
                    <InputElement placeholder={namePlaceholder} name="name" value={formState.name} required={true} onChange={handleOnChange} className="sm:h-10"/>
                    <InputElement placeholder={phonePlaceholder} name="phoneNumber" value={formState.phoneNumber} required={true} onChange={handleOnChange} className="sm:h-10"/>
                </div>
                <button type="submit" className="px-2.5 py-1.5 bg-[#8D25C4] text-white font-semibold rounded-full shadow-xl">Đăng ký nhận ưu đãi</button>
            </form>
        </div>
        <div className="mt-20 flex flex-col items-center max-w-7xl mx-auto">
            <Heading title="Top dịch vụ ưu đãi Lên đến 50%" content=""/>
            <div className="grid grid-cols-3 gap-2.5 w-full mt-10 max-xl:px-5 max-xl:grid-cols-2 max-sm:grid-cols-1">
                {
                    [...Array(6)].map((_, index) => {
                        return(
                            <div key={index} className="bg-gray-500 h-52 w-full rounded">
                                <img src="https://w.ladicdn.com/s600x500/5d070c039197745e067c5e3d/phun-moi-top-dich-vu-20230929043946-xpuym.jpg" alt="" className="w-full h-full object-cover rounded"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div id="dichvu"></div>
        <div  className="max-w-7xl mx-auto max-xl:px-5 mt-20">
            <Heading title="Dịch vụ tại Godiva"/>
            <div className="grid grid-cols-2 gap-2.5 max-lg:grid-cols-1 mt-10">
                {
                    [...Array(6)].map((_, index) => {
                        return (
                            <div key={index} className="h-40 rounded-lg bg-gray-500 shadow-xl">
                                <img src="https://w.ladicdn.com/s900x450/5977f59d1abc544991d43c5b/phun-moi-seoul-center-20231110031747-b_jdt.jpg" alt="" className="w-full h-full object-cover rounded-lg"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div id="video"></div>
        <div className="flex flex-col items-center mt-20">
            <Heading title="Video thực tế" />
            <div className="mt-10 flex flex-col w-full max-w-7xl mx-auto max-xl:px-5">
                <div className="h-[500px] w-[100%] max-sm:h-[400px] bg-slate-500 rounded">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/8zYz_TYCnkc?si=xlP2r606zMotkbfc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="flex justify-between max-sm:grid max-sm:grid-cols-1 max-md:flex-wrap gap-2.5 mt-4">
                    <div className="h-[200px] flex-1 bg-slate-500 rounded">

                    </div>
                    <div className="h-[200px] flex-1 bg-slate-500 rounded">

                    </div>
                    <div className="h-[200px] flex-1 bg-slate-500 rounded">

                    </div>
                </div>
            </div>
        </div>
        <div id="khachhang"></div>
        <div className="mt-20 max-w-7xl mx-auto max-lg:px-5">
            <Heading title="Trải nghiệm của khách hàng" content="Godiva luôn mang đến cho khách hàng những trải nghiệm tuyệt vời nhất"/>
            <div className="grid grid-cols-3 gap-2.5 w-full mt-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
                {
                    customerExperience.map((image) => {
                        return(
                            <div key={image.id} className="bg-gray-500 h-52 w-full rounded">
                                <img src={image.image} alt="" className="w-full h-full object-cover rounded" />
                            </div>
                        )
                    })
                }
            </div>
        </div>  
        <div id="congnghe"></div>
        <div className="mt-20 max-w-7xl mx-auto max-xl:px-5 ">
            <Heading title="Thẩm mỹ viện Godiva" content="Ứng dụng công nghệ làm đẹp hàng đầu Hàn Quốc" />
            <div className="grid grid-cols-3 gap-5 w-full mt-10 max-xl:grid-cols-2 max-sm:grid-cols-1">
                {
                    [...Array(6)].map((_, index) => {
                        return(
                            <div key={index}>
                                <div className="bg-gray-500 h-52 w-full rounded">
                                    <img src="https://w.ladicdn.com/s650x650/5d070c039197745e067c5e3d/laser-iris-20230801064552-s6s9i.jpg" alt="" className="w-full h-full object-cover rounded"/>
                                </div>
                                <h3 className="font-semibold text-xl text-gray-500">Công nghệ Trị nám/tàn nhang</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-2xl font-bold text-[#8D25c4]">LASER IRIS</p>
                                    <div className="flex justify-center items-center w-10 h-10 bg-[#8D25C4] rounded-full cursor-pointer">
                                        <FaArrowRight color="#fff"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="h-[500px] px-24 max-sm:px-5 mt-20 flex justify-center items-center gap-32 max-lg:gap-10 max-lg:flex-col-reverse max-lg:h-auto max-lg:py-5 bg-[#CCB0FE]">
            <img src={homeImage} alt="" className="h-full max-lg:h-[300px]"/>
            <div className="flex flex-col items-center">
                <h1 className="text-[#8D25C4] font-extrabold text-4xl max-lg:text-center">Viện Thẩm Mỹ Godiva</h1>
                <p className="text-[#8D25C4] font-bold text-3xl mt-5 max-lg:text-center">Đồng hành cùng phái đẹp</p>

                <p className="w-96 mt-5 text-center max-sm:w-full">Viện Thẩm Mỹ Hàn Quốc Godiva CN Đà Nẵng là một trong những trung tâm thẩm mỹ hàng đầu tại Đà Nẵng</p>
            </div>
        </div>

        <div id="doingubacsi"></div>
        <div className="mt-20 max-w-7xl mx-auto max-xl:px-5">
            <Heading title="Đội ngũ bác sĩ - Kỹ thuật viên giàu kinh nghiệm"/>
            
            <div className="mt-10 max-sm:mt-5">
                <p className="w-[70%] max-sm:w-full text-center mx-auto">Viện thẩm mỹ DIVA đặc biệt chú trọng xây dựng đội ngũ bác sĩ, kỹ thuật viên, chuyên gia giỏi, tâm huyết với nghề, Yếu tố then chốt quyết định tới 90% thành công của 1 ca thẩm mỹ.</p>
                <div className="mt-10 ">
                    <div className="w-max px-2.5 py-2 rounded-full bg-[#8D25C4]">
                        <p className="text-center font-bold text-white">Đội ngũ bác sĩ</p>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mt-10"
                    >
                        {
                            [...Array(6)].map((_, index) => {
                                return(
                                    <SwiperSlide key={index}>
                                        <div className="h-[350px] bg-slate-400 rounded-md flex justify-center items-center">
                                            <img src="https://w.ladicdn.com/s600x600/5d070c039197745e067c5e3d/bac-si-phau-thuat-4-20230620085116-fjxqm.png" alt="" className="w-full h-full object-cover rounded-md"/>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className="mt-10">
                    <div className="w-max px-2.5 py-2 rounded-full bg-[#8D25C4]">
                        <p className="text-center font-bold text-white">Đội ngũ kỹ thuật viên</p>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        className="mt-10"
                    >
                        
                        {
                            technicians.map((technicians) => {
                                return(
                                    <SwiperSlide key={technicians.id}>
                                        <div className="h-[350px] bg-slate-400 rounded-md flex justify-center items-center">
                                            <img src={technicians.image} alt="" className="w-full h-full object-cover rounded-md"/>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

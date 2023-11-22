import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchDeleteCustomer, fetchGetAllCustomer } from "../../api/customer.api"
import { Pagination } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const CustomerPage = () => {
    const query = useLocation()
    const navigate =useNavigate()
    const searchParams = new URLSearchParams(query.search);
    // const accessToken = localStorage.getItem("token")
    const page = searchParams.get('page');
    const limit = searchParams.get('limit');

    const payload = {
        page: page,
        limit: limit,
    }

    const {data : customerQuery, refetch: refetchCustomers} = useQuery({
        queryKey: ["GET_CUSTOMER", payload],
        queryFn: fetchGetAllCustomer
    })

    const totalPage = customerQuery?.data?.pagination.total
    const currentPage = Number(customerQuery?.data?.pagination?.page)

    const handleChangePagination = (page) => {
        navigate(`/admin/customer?page=${page}&limit=10`)
    }

    const deleteMutation = useMutation({
        mutationFn: (userId) => fetchDeleteCustomer(userId)
    })

    const handleConfirmDelete = (userId) => {
        if (confirm("Bạn có chắc với thao tác này?") == true) {
            deleteMutation.mutate(userId, {
                onSuccess: () => {
                    toast.success("Xoá thành công!")
                    refetchCustomers()
                }
            })
        } else {
           return 0
        }
    }
  return (
    <div className="overflow-x-auto flex flex-col justify-between h-full">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Họ và tên
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Số điện thoại
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Ghi chú
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Thao tác
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    customerQuery?.data.data.map((customer) => {
                        return(
                            <tr key={customer?._id} className="font-bold bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-2  text-gray-900 whitespace-nowrap dark:text-white">
                                    {customer.name}
                                </th>
                                <td className="px-6 py-2">
                                    {customer?.phoneNumber}
                                </td>
                                <td className="px-6 py-2">
                                    {customer?.email}
                                </td>
                                <td className="px-6 py-2">
                                    {customer?.note}
                                </td>
                                <td className="px-6 py-2 flex gap-5">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded font-medium">Xem</button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded font-medium" onClick={() => handleConfirmDelete(customer?._id)}>Xoá</button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        <div className="flex justify-center py-5">
            <Pagination defaultCurrent={page} current={currentPage} total={totalPage} onChange={(page) => handleChangePagination(page)}/>    
        </div>
    </div>
  )
}

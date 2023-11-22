import { User } from "../models/UserModel"

export const handleRegister = async (req, res) => {
    try {
        const {name, phoneNumber, email, note} = req.body

        const user = await User.create({
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            note: note,
        })

        res.status(200).json({
            data: user,
            message: "Register success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const handleGetAllUser = async(req, res) => {
    try {
        const {page, limit} = req.query
        const pageNumber = parseInt(page); 
        const limitNumber = parseInt(limit);
        const startIndex = (pageNumber - 1) * limitNumber;

        const users = await User.find({}).skip(startIndex).limit(limitNumber).sort({createdAt: -1})
        const totalPage = await User.countDocuments({})

        res.status(200).json({
            data: users,
            pagination: {
                page: page,
                total: totalPage
            },
            message: "Get users success"
        })
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const handleDeleteUser = async(req, res) => {
    try {
        const {userId} = req.params
        const user = await User.findOne({_id: userId})
        if(!user) {
            return res.status(404).json({
                message: "User not found"
            })
        }
        const userDeleted = await User.deleteOne({_id: userId})
        res.status(200).json({
            data: userDeleted,
            message: "Delete success"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

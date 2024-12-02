const userModel = require("../models/userModel")

async function userDetailsContoller(req, res) {
    try {
        console.log("userId", req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "User details"
        })

        console.log("user", user) 
    }
    catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

module.exports = userDetailsContoller

// async function userDetailsController(req, res) {
//     try {
//         if (!req.userId) {
//             return res.status(400).json({
//                 message: "User ID not found",
//                 error: true,
//                 success: false,
//             });
//         }

//         console.log("userId:", req.userId); // Ensure this logs correctly
//         res.status(200).json({
//             message: "User details fetched successfully",
//             userId: req.userId,
//             success: true,
//         });

        
//     } catch (err) {
//         res.status(500).json({
//             message: err.message || err,
//             error: true,
//             success: false,
//         });
//     }
// }

// module.exports = userDetailsController;

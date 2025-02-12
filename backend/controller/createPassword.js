const Password = require("../Models/Passwords");

exports.createPassword = async(req,resp)=>{
    try{
        const {site, username ,password} = req.body;
        if(!site || !username ||!password){
            return resp.status(400).json({ message: "All fields are required" });

        }

        const response = await Password.create({site,username,password});
        return resp.status(200).json({
            success:true,
            response,

        })

    }catch(err){
        return resp.status(500).json({
            success:false,
            message:err.message,
        })

    }


}
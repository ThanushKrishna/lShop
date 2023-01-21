const userModel = require('../models/userModel');
const isEmailValid = require('../utility/validateEmail');
const emailOtp = require('../utility/emailOtp');

exports.userBodyValidator = async (req, res, next) => {
    let valid = true;

    if(isEmailValid.validateEmail(req.body.email)) {
        const userExist = await userModel.findOne({email: req.body.email})

        if(userExist == null ){
            const result = await emailOtp.sendEmail(req.body.email) ;
            
            if(result){
                console.log(result);
                next();                
            }
            else{
                console.log("Internal Error while sending OTP");
                return res.status(400).json({
                    messgage: "Internal Error"
                })
            }
                
        }
        else {
            return res.status(200).json({
                message: "User already exists"
            })
        }
    }
    else {
        return res.status(200).send("Incorrect email format");
    }
}

exports.valiDateOTP = async(req, res, next) => {

}
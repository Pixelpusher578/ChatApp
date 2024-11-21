const usermodel = require('../Models/user');
const {createUserschema} = require("../utils/ValidationShema");
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const {sendConfirmationEmail} = require("../utils/nodemailer");
const EmailValidation=require("../Models/EmailValidation")


exports.Signup=async (req,res)=> {
    try{

        const userexist=await usermodel.findOne({e_mail:req.body.e_mail})
        if(userexist){
            return res.status(400).json({message:'this user is already exist'});

        }





        const model = {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Region: req.body.Region,
            PhoneNum: req.body.PhoneNum,
            e_mail: req.body.e_mail,
            Password: req.body.Password,
            isActive: false,
            oauth:false
        };

        const validation=createUserschema.safeParse(model)
        if (!validation.success){
            return res.status(400).json({message:validation.error.errors[0].message});

        }

        model.Password=bcrypt.hashSync(model.Password)
        let activationCode=uuidv4()
        const user = new usermodel(model);
        const savedUser = await user.save();
        sendConfirmationEmail(model.e_mail,activationCode,savedUser._id)

        const Vmodel = {
            ValidationCode: activationCode,
            Userid: savedUser._id,

        };
        const Emailvalidation = new EmailValidation(Vmodel);
        const savedEV = await Emailvalidation.save();

        res.status(200).json({message:"user added successfully"});

    } catch (err) {
        res.status(400).json({ err });
    }
}

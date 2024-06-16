const User = require("../modules/user-module");
const Contact = require("../modules/contact-module")

const getAllUsers = async (req,res,next) =>{
    try {
        const adminUsers =  await User.find({},{password:0});
        if(!adminUsers || adminUsers.length === 0){
            return res.status(404).json({message:"No Users found"});
        }
        return res.status(200).json(adminUsers);
    } catch (error) {
        next(error);
    }
};

const getAllContact = async (req,res,next) =>{
    try {
        const contact =  await Contact.find();
        if(!contact || contact.length === 0){
            return res.status(404).json({message:"No Contact found"});
        }
        return res.status(200).json(contact);
    } catch (error) {
        next(error);
    }
};


module.exports = {getAllUsers,getAllContact};
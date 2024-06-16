const contactForm = require("../modules/contact-module")


const contactControllers = async (req,res) =>{
   try {
    const reponse = req.body;
    console.log(reponse)
    await contactForm.create(reponse);
    return res.status(200).json({message:"message send successfully"})
   } catch (error) {
    return res.status(500).json({message:"message not send"});
   }
};

module.exports = contactControllers;
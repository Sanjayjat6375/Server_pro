

const adminMiddleware = async (req,res,next) =>{
    try {
        const isAdminRole = req.user.isAdmin;
        if(!isAdminRole){
            return res.status(403).json({message:"This is not owner of admin panel"})
        }
        next();
    } catch (error) {
        next(error);
    }
}

module.exports = adminMiddleware;
import jwt from "jsonwebtoken"
import User from "../models/user.js"

//Protect Middleware
export const protect = async (req, res, next) => {
    let token;

    //check Authorization header
    if(req.headers.authorization && 
        req.headers.authorization.startsWith("Bearer")){
          //Get token from hader
          token = req.headers.authorization.split(" ")[1];
            try{
                //verify token
                const decoded = jwt.verify(token,process.env.JWT_SECRET);

                // Attach user to request (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next();

            }catch (error) {
      console.error(error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }

  };
  if (!token) {
 return res.status(401).json({ message: "Not authorized, no token" });
}
        }
    
// Admin Middleware
export const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    return res.status(403).json({ message: "Not authorized as admin" });
  }
};
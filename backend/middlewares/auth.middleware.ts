
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";


interface AuthRequest extends Request {
  user?: any;
}


interface JwtPayload {
  id: string;
}
export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {

  try {

    const authHeader = req.headers.authorization;


    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {

      res.status(401).json({
        success:false,
        message:"No token provided",
      });

      return;
    }


    const token = authHeader.split(" ")[1];


    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;



    const user = await User.findById(decoded.id)
      .select("-password");


    if (!user) {

      res.status(401).json({
        success:false,
        message:"User not found",
      });

      return;
    }


    req.user = user;


    next();


  } catch(error) {

    res.status(401).json({
      success:false,
      message:"Unauthorized",
    });

  }

};

export const authorize =
(...roles: ("admin" | "member")[]) =>
(
 req: AuthRequest,
 res: Response,
 next: NextFunction
): void => {


 if(!req.user){

  res.status(401).json({
    success:false,
    message:"Unauthorized"
  });

  return;
 }


 if(!roles.includes(req.user.role)){

  res.status(403).json({
    success:false,
    message:"Access denied"
  });

  return;

 }


 next();

};
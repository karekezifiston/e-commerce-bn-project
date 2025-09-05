import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express";

const logger = async (req: Request, res: Response, next: NextFunction) =>{
   const { token } = req.headers;
   if (!token || (Array.isArray(token) && token.length === 0)) {
    return res.json({ success: false, message: "Not Authorized login Again" });
   }
   try {
      const tokenStr = Array.isArray(token) ? token[0] : token;
      const token_decode = jwt.verify(tokenStr, process.env.JWT_SECRET as string) as { id: string };
      req.body.userId = token_decode.id;
      next();
   } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
   }
}

export default logger
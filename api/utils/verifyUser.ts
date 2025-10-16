import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AuthRequest } from "../types/index.js";
import { errorHandler } from "./error.js";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authReq = req as AuthRequest;
  const token = req.cookies.access_token;

  if (!token) {
    next(errorHandler(401, "Unauthorized"));
    return;
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET as string,
    (err: Error | null, decoded: JwtPayload | string | undefined) => {
      if (err) {
        next(errorHandler(403, "Forbidden"));
        return;
      }

      authReq.user = decoded as { id: string };
      next();
    }
  );
};

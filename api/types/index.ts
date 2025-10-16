import { Request } from "express";

export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
  _doc?: any;
}

export interface IListing {
  _id: string;
  name: string;
  description: string;
  address: string;
  regularPrice: number;
  discountPrice: number;
  bathrooms: number;
  bedrooms: number;
  furnished: boolean;
  parking: boolean;
  type: "sale" | "rent";
  offer: boolean;
  imageUrls: string[];
  userRef: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
  };
}

export interface CustomError extends Error {
  statusCode?: number;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO: string;
      JWT_SECRET: string;
      NODE_ENV?: "development" | "production";
    }
  }
}

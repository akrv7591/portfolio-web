import jwt from "jsonwebtoken";
import { JWT_KEY } from "../configs/jwt";
import { UserProps } from "../providers/AuthProvider";

type JWT_UTILS = {
  verifyToken: (token: string) => null | UserProps;
};

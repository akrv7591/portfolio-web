import { UserProps } from "@providers/AuthProvider";

type JWT_UTILS = {
  verifyToken: (token: string) => null | UserProps;
};

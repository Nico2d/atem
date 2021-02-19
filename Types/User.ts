import { StringDecoder } from "string_decoder";

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  username: string;
}

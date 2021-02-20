import { ErrorDto } from "./ErrorDto";

export interface ResponseDto<T extends unknown> {
  errors?: ErrorDto[];
  res?: T;
}

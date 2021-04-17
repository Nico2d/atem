import { ResponseDto } from "./../ResponseDto";
import { UserDto } from "./UserDto";

export interface UserResponseDto extends ResponseDto {
  user?: UserDto | UserDto[];
}

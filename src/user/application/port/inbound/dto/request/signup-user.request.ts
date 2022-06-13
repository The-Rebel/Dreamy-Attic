import { IsEmail, IsString, Length } from "class-validator";

export class SignUpUserRequest {
    @IsEmail()
    email: string;

    @Length(7, 20)
    username: string;

    @IsString()
    @Length(8, 60)
    password: string;
}

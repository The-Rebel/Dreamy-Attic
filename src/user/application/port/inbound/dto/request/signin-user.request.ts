import { IsString, Length } from "class-validator";

export class SignInUserRequest {
    @Length(7, 20)
    username: string;

    @IsString()
    @Length(8, 60)
    password: string;
}

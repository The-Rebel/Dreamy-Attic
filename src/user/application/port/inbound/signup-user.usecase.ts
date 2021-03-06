import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/request/signup-user.request";

export interface SignUpUserUseCase {
    signUpUser(request: SignUpUserRequest): Promise<void>;
}

export const SignUpUserUseCaseToken = "SignUpUserUseCase";

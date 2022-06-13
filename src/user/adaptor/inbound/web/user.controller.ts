import { Body, Controller, Inject, Post } from "@nestjs/common";
import { SignUpUserUseCase, SignUpUserUseCaseToken } from "@src/user/application/port/inbound/signup-user.usecase";
import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/request/signup-user.request";
import { SignInUserUseCase, SignInUserUseCaseToken } from "@src/user/application/port/inbound/signin-user.usecase";
import { SignInUserRequest } from "@src/user/application/port/inbound/dto/request/signin-user.request";

@Controller("/user")
export class UserController {
    constructor(
        @Inject(SignUpUserUseCaseToken)
        private readonly signUpUserUseCase: SignUpUserUseCase,

        @Inject(SignInUserUseCaseToken)
        private readonly signInUserUseCase: SignInUserUseCase
    ) {}

    @Post()
    public user(@Body() request: SignUpUserRequest) {
        return this.signUpUserUseCase.signUpUser(request);
    }

    @Post("/token")
    public userToken(@Body() request: SignInUserRequest) {
        return this.signInUserUseCase.signInUser(request);
    }
}

import { Body, Controller, Inject, Post } from "@nestjs/common";
import { SignUpUserUseCase, SignUpUserUseCaseToken } from "@src/user/application/port/inbound/signup-user.usecase";
import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/signup-user.request";

@Controller("/user")
export class UserController {
    constructor(
        @Inject(SignUpUserUseCaseToken)
        private readonly signUpUserUseCase: SignUpUserUseCase
    ) {}

    @Post()
    async user(@Body() request: SignUpUserRequest) {
        await this.signUpUserUseCase.signUpUser(request);
    }
}

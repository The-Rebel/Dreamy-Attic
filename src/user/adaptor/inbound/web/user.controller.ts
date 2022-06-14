import { Body, Controller, Get, Inject, Param, Post, Req, UseGuards } from "@nestjs/common";
import { SignUpUserUseCase, SignUpUserUseCaseToken } from "@src/user/application/port/inbound/signup-user.usecase";
import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/request/signup-user.request";
import { SignInUserUseCase, SignInUserUseCaseToken } from "@src/user/application/port/inbound/signin-user.usecase";
import { SignInUserRequest } from "@src/user/application/port/inbound/dto/request/signin-user.request";
import { AuthGuard } from "@nestjs/passport";
import { GetUserInformationUseCase, GetUserInformationUseCaseToken } from "@src/user/application/port/inbound/get-user-information.usecase";

@Controller("/user")
export class UserController {
    constructor(
        @Inject(SignUpUserUseCaseToken)
        private readonly signUpUserUseCase: SignUpUserUseCase,

        @Inject(SignInUserUseCaseToken)
        private readonly signInUserUseCase: SignInUserUseCase,

        @Inject(GetUserInformationUseCaseToken)
        private readonly getUserInformationUseCase: GetUserInformationUseCase
    ) {}

    @UseGuards(AuthGuard("jwt"))
    @Get("/profile")
    public profile(@Req() req) {
        return this.getUserInformationUseCase.getUserInformation(req.user.sub);
    }

    @UseGuards(AuthGuard("jwt"))
    @Get("/:userId")
    public userInformation(@Param("userId") userId: number) {
        return this.getUserInformationUseCase.getUserInformation(userId);
    }

    @Post()
    public user(@Body() request: SignUpUserRequest) {
        return this.signUpUserUseCase.signUpUser(request);
    }

    @Post("/token")
    public userToken(@Body() request: SignInUserRequest) {
        return this.signInUserUseCase.signInUser(request);
    }
}

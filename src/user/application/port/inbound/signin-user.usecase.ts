import { SignInUserRequest } from "@src/user/application/port/inbound/dto/request/signin-user.request";
import { IssueTokenResponse } from "@src/user/application/port/inbound/dto/response/issue-token.response";

export interface SignInUserUseCase {
    signInUser(request: SignInUserRequest): Promise<IssueTokenResponse>;
}

export const SignInUserUseCaseToken = "SignInUserUseCase";

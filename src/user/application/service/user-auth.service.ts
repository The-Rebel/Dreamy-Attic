import { Inject, Injectable } from "@nestjs/common";
import { SignUpUserUseCase } from "@src/user/application/port/inbound/signup-user.usecase";
import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/request/signup-user.request";
import { User } from "@src/user/domain/user";
import { SaveUserPort, SaveUserPortToken } from "@src/user/application/port/outbound/save-user.port";
import { SignInUserUseCase } from "@src/user/application/port/inbound/signin-user.usecase";
import { SignInUserRequest } from "@src/user/application/port/inbound/dto/request/signin-user.request";
import { FindByUserNamePort, FindByUserNamePortToken } from "@src/user/application/port/outbound/find-by-username.port";
import { JwtService } from "@nestjs/jwt";
import { IssueTokenResponse } from "@src/user/application/port/inbound/dto/response/issue-token.response";
import { ConfigService } from "@nestjs/config";
import { JWT_SECRET_KEY } from "@src/global/environment/constants";
import * as bcrypt from "bcrypt";
import { ConflictUserNameException, NotMatchedPasswordException } from "@src/user/exception";
import { ExistsByUserNamePort, ExistsByUserNamePortToken } from "@src/user/application/port/outbound/exists-by-username.port";

@Injectable()
export class UserAuthService implements SignUpUserUseCase, SignInUserUseCase {
    constructor(
        @Inject(ExistsByUserNamePortToken)
        private readonly existsByUserNamePort: ExistsByUserNamePort,

        @Inject(SaveUserPortToken)
        private readonly saveUserPort: SaveUserPort,

        @Inject(FindByUserNamePortToken)
        private readonly findByUserNamePort: FindByUserNamePort,

        private readonly jwtService: JwtService,
        private readonly configService: ConfigService
    ) {}

    async signUpUser(request: SignUpUserRequest): Promise<void> {
        if (await this.existsByUserNamePort.existsByUserName(request.username)) {
            throw ConflictUserNameException;
        }

        const user: User = new User({
            email: request.email,
            username: request.username,
            password: await bcrypt.hash(request.password, 12)
        });

        await this.saveUserPort.saveUser(user);
    }

    async signInUser(request: SignInUserRequest): Promise<IssueTokenResponse> {
        const user: User = await this.findByUserNamePort.findByUserName(request.username);

        if (!(await bcrypt.compare(request.password, user.password))) {
            throw NotMatchedPasswordException;
        }

        const accessToken: string = this.jwtService.sign(
            {
                sub: user.id
            },
            {
                expiresIn: "2h",
                secret: this.configService.get(JWT_SECRET_KEY)
            }
        );

        return new IssueTokenResponse().setAccessToken(accessToken).build();
    }
}

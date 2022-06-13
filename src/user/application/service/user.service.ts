import { Inject, Injectable } from "@nestjs/common";
import { SignUpUserUseCase } from "@src/user/application/port/inbound/signup-user.usecase";
import { SignUpUserRequest } from "@src/user/application/port/inbound/dto/signup-user.request";
import { User } from "@src/user/domain/user";
import * as bcrypt from "bcrypt";
import { SaveUserPort, SaveUserPortToken } from "@src/user/application/port/outbound/save-user.port";

@Injectable()
export class UserService implements SignUpUserUseCase {
    constructor(
        @Inject(SaveUserPortToken)
        private readonly saveUserPort: SaveUserPort
    ) {}

    async signUpUser(request: SignUpUserRequest): Promise<void> {
        const user: User = new User({
            email: request.email,
            username: request.username,
            password: await bcrypt.hash(request.password, 12)
        });

        await this.saveUserPort.saveUser(user);
    }
}

import { Inject, Injectable } from "@nestjs/common";
import { GetUserInformationUseCase } from "@src/user/application/port/inbound/get-user-information.usecase";
import { UserInformationResponse } from "@src/user/application/port/inbound/dto/response/user-information.response";
import { FindByIdPort, FindByIdPortToken } from "@src/user/application/port/outbound/find-by-id.port";
import { User } from "@src/user/domain/user";

@Injectable()
export class UserService implements GetUserInformationUseCase {
    constructor(
        @Inject(FindByIdPortToken)
        private readonly findByIdPort: FindByIdPort
    ) {}

    async getUserInformation(userId: number): Promise<UserInformationResponse> {
        const user: User = await this.findByIdPort.findById(userId);

        return new UserInformationResponse().setId(user.id).setUserName(user.username).setEmail(user.email).build();
    }
}

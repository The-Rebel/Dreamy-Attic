import { Module } from "@nestjs/common";
import { UserController } from "@src/user/adaptor/inbound/web/user.controller";
import { UserMemoryAdaptor } from "@src/user/adaptor/outbound/memory/user-memory.adaptor";
import { UserService } from "@src/user/application/service/user.service";
import { SignUpUserUseCaseToken } from "@src/user/application/port/inbound/signup-user.usecase";
import { SaveUserPortToken } from "@src/user/application/port/outbound/save-user.port";

@Module({
    controllers: [UserController],
    providers: [
        UserMemoryAdaptor,
        UserService,
        {
            provide: SaveUserPortToken,
            useClass: UserMemoryAdaptor
        },
        {
            provide: SignUpUserUseCaseToken,
            useClass: UserService
        }
    ]
})
export class UserModule {}

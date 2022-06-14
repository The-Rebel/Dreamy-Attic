import { Module } from "@nestjs/common";
import { UserController } from "@src/user/adaptor/inbound/web/user.controller";
import { UserMemoryAdaptor } from "@src/user/adaptor/outbound/memory/user-memory.adaptor";
import { UserService } from "@src/user/application/service/user.service";
import { SignUpUserUseCaseToken } from "@src/user/application/port/inbound/signup-user.usecase";
import { SaveUserPortToken } from "@src/user/application/port/outbound/save-user.port";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "@src/global/passport-jwt/jwt.strategy";
import { SignInUserUseCaseToken } from "@src/user/application/port/inbound/signin-user.usecase";
import { FindByUserNamePortToken } from "@src/user/application/port/outbound/find-by-username.port";
import { ExistsByUserNamePortToken } from "@src/user/application/port/outbound/exists-by-username.port";

@Module({
    imports: [JwtModule.register({})],
    controllers: [UserController],
    providers: [
        UserMemoryAdaptor,
        UserService,
        {
            provide: SaveUserPortToken,
            useClass: UserMemoryAdaptor
        },
        {
            provide: ExistsByUserNamePortToken,
            useClass: UserMemoryAdaptor
        },
        {
            provide: SignUpUserUseCaseToken,
            useClass: UserService
        },
        {
            provide: FindByUserNamePortToken,
            useClass: UserMemoryAdaptor
        },
        {
            provide: SignInUserUseCaseToken,
            useClass: UserService
        },
        JwtStrategy
    ]
})
export class UserModule {}

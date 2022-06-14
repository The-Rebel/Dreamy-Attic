import { Module } from "@nestjs/common";
import { StudyRoomModule } from "@src/study-room/study-room.module";
import { UserModule } from "@src/user/user.module";
import { ConfigModule } from "@nestjs/config";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "@src/global/exception/http-exception.filter";

@Module({
    imports: [
        StudyRoomModule,
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true
        })
    ],
    providers: [
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter
        }
    ]
})
export class AppModule {}

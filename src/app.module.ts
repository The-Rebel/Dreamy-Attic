import { Module } from "@nestjs/common";
import { StudyRoomModule } from "@src/study-room/study-room.module";
import { UserModule } from "@src/user/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        StudyRoomModule,
        UserModule,
        ConfigModule.forRoot({
            isGlobal: true
        })
    ]
})
export class AppModule {}

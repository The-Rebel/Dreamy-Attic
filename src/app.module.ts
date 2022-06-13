import { Module } from "@nestjs/common";
import { StudyRoomModule } from "@src/study-room/study-room.module";
import { UserModule } from "@src/user/user.module";

@Module({
    imports: [StudyRoomModule, UserModule]
})
export class AppModule {}

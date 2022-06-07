import { Module } from "@nestjs/common";
import { StudyRoomModule } from "@src/study-room/study-room.module";

@Module({
    imports: [StudyRoomModule]
})
export class AppModule {}

import { Module } from "@nestjs/common";
import { StudyRoomMemoryAdaptor } from "@src/study-room/adaptor/outbound/memory/study-room-memory.adaptor";
import { StudyRoomService } from "@src/study-room/application/service/study-room.service";
import { SaveStudyRoomPortToken } from "@src/study-room/application/port/outbound/save-study-room.port";
import { CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { StudyRoomController } from "@src/study-room/adaptor/inbound/web/study-room.controller";

@Module({
    controllers: [StudyRoomController],
    providers: [
        StudyRoomMemoryAdaptor,
        StudyRoomService,
        {
            provide: SaveStudyRoomPortToken,
            useExisting: StudyRoomMemoryAdaptor
        },
        {
            provide: CreateStudyRoomUseCaseToken,
            useExisting: StudyRoomService
        }
    ]
})
export class StudyRoomModule {}

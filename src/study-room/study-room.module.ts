import { Module } from "@nestjs/common";
import { StudyRoomMemoryAdaptor } from "@src/study-room/adaptor/outbound/memory/study-room-memory.adaptor";
import { StudyRoomService } from "@src/study-room/application/service/study-room.service";
import { SaveStudyRoomPortToken } from "@src/study-room/application/port/outbound/save-study-room.port";
import { CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { StudyRoomController } from "@src/study-room/adaptor/inbound/web/study-room.controller";
import { GetStudyRoomListUseCaseToken } from "@src/study-room/application/port/inbound/get-study-room-list.usecase";
import { FindAllPortToken } from "@src/study-room/application/port/outbound/find-all.port";
import { GetStudyRoomInformationToken } from "@src/study-room/application/port/inbound/get-study-room-information.usecase";
import { FindByIdPortToken } from "@src/study-room/application/port/outbound/find-by-id.port";

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
            provide: FindAllPortToken,
            useExisting: StudyRoomMemoryAdaptor
        },
        {
            provide: FindByIdPortToken,
            useExisting: StudyRoomMemoryAdaptor
        },
        {
            provide: CreateStudyRoomUseCaseToken,
            useExisting: StudyRoomService
        },
        {
            provide: GetStudyRoomListUseCaseToken,
            useExisting: StudyRoomService
        },
        {
            provide: GetStudyRoomInformationToken,
            useExisting: StudyRoomService
        }
    ]
})
export class StudyRoomModule {}

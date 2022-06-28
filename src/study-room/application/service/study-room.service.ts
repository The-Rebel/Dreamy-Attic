import { Inject, Injectable } from "@nestjs/common";
import { SaveStudyRoomPort, SaveStudyRoomPortToken } from "@src/study-room/application/port/outbound/save-study-room.port";
import { CreateStudyRoomUseCase } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";
import { StudyRoom } from "@src/study-room/domain/study-room";

@Injectable()
export class StudyRoomService implements CreateStudyRoomUseCase {
    constructor(
        @Inject(SaveStudyRoomPortToken)
        private readonly saveStudyRoomPort: SaveStudyRoomPort
    ) {}

    async createStudyRoom(request: CreateStudyRoomRequest): Promise<void> {
        const studyRoom: StudyRoom = new StudyRoom({
            thumbnail: request.thumbnail,
            name: request.name,
            videoUrl: request.videoUrl,
            description: request.description
        });

        await this.saveStudyRoomPort.saveStudyRoom(studyRoom);
    }
}

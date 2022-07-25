import { Inject, Injectable } from "@nestjs/common";
import { SaveStudyRoomPort, SaveStudyRoomPortToken } from "@src/study-room/application/port/outbound/save-study-room.port";
import { CreateStudyRoomUseCase } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";
import { StudyRoom } from "@src/study-room/domain/study-room";
import { GetStudyRoomListUseCase } from "@src/study-room/application/port/inbound/get-study-room-list.usecase";
import { GetStudyRoomListResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-list.response";
import { FindAllPort, FindAllPortToken } from "@src/study-room/application/port/outbound/find-all.port";
import { GetStudyRoomInformationUseCase } from "@src/study-room/application/port/inbound/get-study-room-information.usecase";
import { GetStudyRoomInformationResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-information.response";
import { FindByIdPort, FindByIdPortToken } from "@src/study-room/application/port/outbound/find-by-id.port";

@Injectable()
export class StudyRoomService implements CreateStudyRoomUseCase, GetStudyRoomListUseCase, GetStudyRoomInformationUseCase {
    constructor(
        @Inject(SaveStudyRoomPortToken)
        private readonly saveStudyRoomPort: SaveStudyRoomPort,

        @Inject(FindAllPortToken)
        private readonly findAllPort: FindAllPort,

        @Inject(FindByIdPortToken)
        private readonly findByIdPort: FindByIdPort
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

    async getStudyRoomList(): Promise<GetStudyRoomListResponse> {
        const studyRooms: StudyRoom[] = await this.findAllPort.findAll();

        return new GetStudyRoomListResponse()
            .setStudyRooms(
                studyRooms.map(studyRoom =>
                    new GetStudyRoomListResponse.StudyRoom()
                        .setId(studyRoom.id)
                        .setName(studyRoom.name)
                        .setThumbnail(studyRoom.thumbnail)
                        .build()
                )
            )
            .build();
    }

    async getStudyRoomInformation(studyRoomId: number): Promise<GetStudyRoomInformationResponse> {
        const studyRoom: StudyRoom = await this.findByIdPort.findById(studyRoomId);

        return new GetStudyRoomInformationResponse()
            .setId(studyRoom.id)
            .setThumbnail(studyRoom.thumbnail)
            .setName(studyRoom.name)
            .setVideoUrl(studyRoom.videoUrl)
            .setDescription(studyRoom.description)
            .build();
    }
}

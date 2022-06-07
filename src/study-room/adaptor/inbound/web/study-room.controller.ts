import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateStudyRoomUseCase, CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";

@Controller("study-room")
export class StudyRoomController {
    constructor(
        @Inject(CreateStudyRoomUseCaseToken)
        private readonly createStudyRoomUseCase: CreateStudyRoomUseCase
    ) {}

    @Post()
    async studyRoom(@Body() request: CreateStudyRoomRequest) {
        await this.createStudyRoomUseCase.createStudyRoom(request);
    }
}

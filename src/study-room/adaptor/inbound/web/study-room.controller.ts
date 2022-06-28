import { Body, Controller, Inject, Post, UseGuards } from "@nestjs/common";
import { CreateStudyRoomUseCase, CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";
import { AuthGuard } from "@nestjs/passport";

@Controller("study-room")
export class StudyRoomController {
    constructor(
        @Inject(CreateStudyRoomUseCaseToken)
        private readonly createStudyRoomUseCase: CreateStudyRoomUseCase
    ) {}

    @UseGuards(AuthGuard("jwt"))
    @Post()
    async studyRoom(@Body() request: CreateStudyRoomRequest): Promise<void> {
        await this.createStudyRoomUseCase.createStudyRoom(request);
    }
}

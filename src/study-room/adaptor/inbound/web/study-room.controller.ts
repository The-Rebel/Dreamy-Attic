import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { CreateStudyRoomUseCase, CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";
import { AuthGuard } from "@nestjs/passport";
import {
    GetStudyRoomListUseCase,
    GetStudyRoomListUseCaseToken
} from "@src/study-room/application/port/inbound/get-study-room-list.usecase";
import { GetStudyRoomListResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-list.response";

@Controller("study-room")
export class StudyRoomController {
    constructor(
        @Inject(CreateStudyRoomUseCaseToken)
        private readonly createStudyRoomUseCase: CreateStudyRoomUseCase,

        @Inject(GetStudyRoomListUseCaseToken)
        private readonly getStudyRoomListUseCase: GetStudyRoomListUseCase
    ) {}

    @UseGuards(AuthGuard("jwt"))
    @Post()
    async studyRoom(@Body() request: CreateStudyRoomRequest): Promise<void> {
        await this.createStudyRoomUseCase.createStudyRoom(request);
    }

    @UseGuards(AuthGuard("jwt"))
    @Get()
    studyRoomList(): Promise<GetStudyRoomListResponse> {
        return this.getStudyRoomListUseCase.getStudyRoomList();
    }
}

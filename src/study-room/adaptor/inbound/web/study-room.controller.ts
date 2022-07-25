import { Body, Controller, Get, Inject, Param, Post, UseGuards } from "@nestjs/common";
import { CreateStudyRoomUseCase, CreateStudyRoomUseCaseToken } from "@src/study-room/application/port/inbound/create-study-room.usecase";
import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";
import { AuthGuard } from "@nestjs/passport";
import {
    GetStudyRoomListUseCase,
    GetStudyRoomListUseCaseToken
} from "@src/study-room/application/port/inbound/get-study-room-list.usecase";
import { GetStudyRoomListResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-list.response";
import { GetStudyRoomInformationResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-information.response";
import {
    GetStudyRoomInformationToken,
    GetStudyRoomInformationUseCase
} from "@src/study-room/application/port/inbound/get-study-room-information.usecase";

@Controller("study-room")
export class StudyRoomController {
    constructor(
        @Inject(CreateStudyRoomUseCaseToken)
        private readonly createStudyRoomUseCase: CreateStudyRoomUseCase,

        @Inject(GetStudyRoomListUseCaseToken)
        private readonly getStudyRoomListUseCase: GetStudyRoomListUseCase,

        @Inject(GetStudyRoomInformationToken)
        private readonly getStudyRoomInformationUseCase: GetStudyRoomInformationUseCase
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

    @UseGuards(AuthGuard("jwt"))
    @Get("/:studyRoomId")
    studyRoomInformation(@Param("studyRoomId") studyRoomId: number): Promise<GetStudyRoomInformationResponse> {
        return this.getStudyRoomInformationUseCase.getStudyRoomInformation(studyRoomId);
    }
}

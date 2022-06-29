import { GetStudyRoomListResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-list.response";

export interface GetStudyRoomListUseCase {
    getStudyRoomList(): Promise<GetStudyRoomListResponse>;
}

export const GetStudyRoomListUseCaseToken = "GetStudyRoomListUseCase";

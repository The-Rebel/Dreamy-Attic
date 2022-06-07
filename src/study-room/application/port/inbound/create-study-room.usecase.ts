import { CreateStudyRoomRequest } from "@src/study-room/application/port/inbound/dto/request/create-study-room.request";

export interface CreateStudyRoomUseCase {
    createStudyRoom(request: CreateStudyRoomRequest);
}

export const CreateStudyRoomUseCaseToken = "CreateStudyRoomUseCase";

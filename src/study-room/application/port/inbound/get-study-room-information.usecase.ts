import { GetStudyRoomInformationResponse } from "@src/study-room/application/port/inbound/dto/response/get-study-room-information.response";

export interface GetStudyRoomInformationUseCase {
    getStudyRoomInformation(studyRoomId: number): Promise<GetStudyRoomInformationResponse>;
}

export const GetStudyRoomInformationToken = "GetStudyRoomInformation";

import { UserInformationResponse } from "@src/user/application/port/inbound/dto/response/user-information.response";

export interface GetUserInformationUseCase {
    getUserInformation(userId: number): Promise<UserInformationResponse>;
}

export const GetUserInformationUseCaseToken = "GetUserInformationUseCase";

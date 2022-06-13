import { Expose } from "class-transformer";

export class IssueTokenResponse {
    @Expose({ name: "access_token" })
    accessToken: string;
}

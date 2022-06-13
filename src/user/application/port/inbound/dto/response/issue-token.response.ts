import { Expose } from "class-transformer";

export class IssueTokenResponse {
    constructor() {
        this.accessToken = null;
    }

    @Expose({ name: "access_token" })
    private accessToken: string;

    setAccessToken(accessToken: string): IssueTokenResponse {
        this.accessToken = accessToken;
        return this;
    }

    build() {
        return this;
    }
}
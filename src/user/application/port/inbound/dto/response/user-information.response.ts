export class UserInformationResponse {
    constructor() {
        this.id = null;
        this.email = null;
        this.username = null;
    }

    private id: number;

    private email: string;

    private username: string;

    setId(id: number): UserInformationResponse {
        this.id = id;
        return this;
    }

    setEmail(email: string): UserInformationResponse {
        this.email = email;
        return this;
    }

    setUserName(username: string): UserInformationResponse {
        this.username = username;
        return this;
    }

    build() {
        return this;
    }
}

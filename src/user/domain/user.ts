export class User {
    constructor(user: Omit<User, "id">) {
        this.email = user.email;
        this.username = user.username;
        this.password = user.password;
    }

    id: number;

    email: string;

    username: string;

    password: string;
}

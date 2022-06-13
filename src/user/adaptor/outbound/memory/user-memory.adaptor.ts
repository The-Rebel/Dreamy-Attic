import { SaveUserPort } from "@src/user/application/port/outbound/save-user.port";
import { User } from "@src/user/domain/user";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserMemoryAdaptor implements SaveUserPort {
    private users: User[] = [];
    private lastIndex: number = 0;

    async saveUser(user: User): Promise<void> {
        user.id = ++this.lastIndex;
        this.users.push(user);
        console.log(this.users);
    }
}

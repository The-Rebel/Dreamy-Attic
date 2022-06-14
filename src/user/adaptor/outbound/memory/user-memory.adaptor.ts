import { SaveUserPort } from "@src/user/application/port/outbound/save-user.port";
import { User } from "@src/user/domain/user";
import { Injectable, NotFoundException } from "@nestjs/common";
import { FindByUserNamePort } from "@src/user/application/port/outbound/find-by-username.port";

@Injectable()
export class UserMemoryAdaptor implements SaveUserPort, FindByUserNamePort {
    private static readonly users: User[] = [];
    private static lastIndex: number = 0;

    async saveUser(user: User): Promise<void> {
        user.id = ++UserMemoryAdaptor.lastIndex;
        UserMemoryAdaptor.users.push(user);
    }

    async findByUserName(username: string): Promise<User> {
        const user: User = UserMemoryAdaptor.users.filter(u => u.username === username)[0];
        if (!user) {
            throw new NotFoundException("User Not Found");
        }
        return user;
    }
}

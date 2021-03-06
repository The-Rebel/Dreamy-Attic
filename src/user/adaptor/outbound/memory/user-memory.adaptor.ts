import { SaveUserPort } from "@src/user/application/port/outbound/save-user.port";
import { User } from "@src/user/domain/user";
import { Injectable } from "@nestjs/common";
import { FindByUserNamePort } from "@src/user/application/port/outbound/find-by-username.port";
import { UserNotFoundException } from "@src/user/exception";
import { ExistsByUserNamePort } from "@src/user/application/port/outbound/exists-by-username.port";
import { FindByIdPort } from "@src/user/application/port/outbound/find-by-id.port";

@Injectable()
export class UserMemoryAdaptor implements SaveUserPort, FindByUserNamePort, ExistsByUserNamePort, FindByIdPort {
    private readonly users: User[] = [];
    private lastIndex = 0;

    async saveUser(user: User): Promise<void> {
        user.id = ++this.lastIndex;
        this.users.push(user);
    }

    async findByUserName(username: string): Promise<User> {
        const user: User = this.users.filter(u => u.username === username)[0];
        if (!user) {
            throw UserNotFoundException;
        }
        return user;
    }

    async existsByUserName(username: string): Promise<boolean> {
        return this.users.filter(u => u.username === username).length > 0;
    }

    async findById(id: number): Promise<User> {
        const user: User = this.users.filter(u => u.id === id)[0];
        if (!user) {
            throw UserNotFoundException;
        }
        return user;
    }
}

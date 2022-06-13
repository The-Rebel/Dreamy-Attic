import { User } from "@src/user/domain/user";

export interface FindByUserNamePort {
    findByUserName(username: string): Promise<User>;
}

export const FindByUserNamePortToken = "FindByUserNamePort";

import { User } from "@src/user/domain/user";

export interface SaveUserPort {
    saveUser(user: User): Promise<void>;
}

export const SaveUserPortToken = "SaveUserPort";

import { User } from "@src/user/domain/user";

export interface FindByIdPort {
    findById(id: number): Promise<User>;
}

export const FindByIdPortToken = "FindByIdPort";

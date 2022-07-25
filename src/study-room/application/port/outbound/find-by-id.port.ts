import { StudyRoom } from "@src/study-room/domain/study-room";

export interface FindByIdPort {
    findById(id: number): Promise<StudyRoom>;
}

export const FindByIdPortToken = "FindByIdPort";

import { StudyRoom } from "@src/study-room/domain/study-room";

export interface FindAllPort {
    findAll(): Promise<StudyRoom[]>;
}

export const FindAllPortToken = "FindAllPort";

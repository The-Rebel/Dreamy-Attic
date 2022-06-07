import { StudyRoom } from "@src/study-room/domain/study-room";

export interface SaveStudyRoomPort {
    saveStudyRoom(studyRoom: StudyRoom): Promise<void>;
}

export const SaveStudyRoomPortToken = "SaveStudyRoomPort";

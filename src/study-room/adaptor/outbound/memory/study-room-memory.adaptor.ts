import { Injectable } from "@nestjs/common";
import { SaveStudyRoomPort } from "@src/study-room/application/port/outbound/save-study-room.port";
import { StudyRoom } from "@src/study-room/domain/study-room";
import { FindAllPort } from "@src/study-room/application/port/outbound/find-all.port";

@Injectable()
export class StudyRoomMemoryAdaptor implements SaveStudyRoomPort, FindAllPort {
    private studyRooms: StudyRoom[] = [];
    private lastIndex = 0;

    async saveStudyRoom(studyRoom: StudyRoom): Promise<void> {
        studyRoom.id = ++this.lastIndex;
        this.studyRooms.push(studyRoom);
    }

    findAll(): Promise<StudyRoom[]> {
        return Promise.resolve(this.studyRooms);
    }
}

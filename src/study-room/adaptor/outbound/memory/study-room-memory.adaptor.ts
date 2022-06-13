import { Injectable } from "@nestjs/common";
import { SaveStudyRoomPort } from "@src/study-room/application/port/outbound/save-study-room.port";
import { StudyRoom } from "@src/study-room/domain/study-room";

@Injectable()
export class StudyRoomMemoryAdaptor implements SaveStudyRoomPort {
    private studyRooms: StudyRoom[] = [];
    private lastIndex: number = 0;

    async saveStudyRoom(studyRoom: StudyRoom): Promise<void> {
        studyRoom.id = ++this.lastIndex;
        this.studyRooms.push(studyRoom);
    }
}

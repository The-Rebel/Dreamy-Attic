import { Injectable } from "@nestjs/common";
import { SaveStudyRoomPort } from "@src/study-room/application/port/outbound/save-study-room.port";
import { StudyRoom } from "@src/study-room/domain/study-room";
import { FindAllPort } from "@src/study-room/application/port/outbound/find-all.port";
import { FindByIdPort } from "@src/study-room/application/port/outbound/find-by-id.port";
import { StudyRoomNotFoundException } from "@src/study-room/exception";

@Injectable()
export class StudyRoomMemoryAdaptor implements SaveStudyRoomPort, FindAllPort, FindByIdPort {
    private studyRooms: StudyRoom[] = [];
    private lastIndex = 0;

    async saveStudyRoom(studyRoom: StudyRoom): Promise<void> {
        studyRoom.id = ++this.lastIndex;
        this.studyRooms.push(studyRoom);
    }

    findAll(): Promise<StudyRoom[]> {
        return Promise.resolve(this.studyRooms);
    }

    async findById(id: number): Promise<StudyRoom> {
        const studyRoom: StudyRoom = this.studyRooms.find(s => s.id === id);

        if (!studyRoom) {
            throw StudyRoomNotFoundException;
        }

        return studyRoom;
    }
}

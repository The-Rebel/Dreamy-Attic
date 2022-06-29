class StudyRoom {
    constructor() {
        this.id = null;
        this.thumbnail = null;
        this.name = null;
    }

    private id: number;

    private thumbnail: string;

    private name: string;

    setId(id: number): StudyRoom {
        this.id = id;
        return this;
    }

    setThumbnail(thumbnail: string): StudyRoom {
        this.thumbnail = thumbnail;
        return this;
    }

    setName(name: string): StudyRoom {
        this.name = name;
        return this;
    }

    build(): StudyRoom {
        return this;
    }
}

export class GetStudyRoomListResponse {
    static StudyRoom = StudyRoom;

    constructor() {
        this.studyRooms = null;
    }

    private studyRooms: StudyRoom[];

    setStudyRooms(studyRooms: StudyRoom[]): GetStudyRoomListResponse {
        this.studyRooms = studyRooms;
        return this;
    }

    build(): GetStudyRoomListResponse {
        return this;
    }
}

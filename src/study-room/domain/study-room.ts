export class StudyRoom {
    constructor(studyRoom: Omit<StudyRoom, "id">) {
        this.thumbnail = studyRoom.thumbnail;
        this.name = studyRoom.name;
        this.videoUrl = studyRoom.videoUrl;
        this.description = studyRoom.description;
    }

    id: number;

    thumbnail: string;

    name: string;

    videoUrl: string;

    description: string;
}

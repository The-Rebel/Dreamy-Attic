export class GetStudyRoomInformationResponse {
    constructor() {
        this.id = null;
        this.thumbnail = null;
        this.name = null;
        this.videoUrl = null;
        this.description = null;
    }

    private id: number;

    private thumbnail: string;

    private name: string;

    private videoUrl: string;

    private description: string;

    setId(id: number): GetStudyRoomInformationResponse {
        this.id = id;
        return this;
    }

    setThumbnail(thumbnail: string): GetStudyRoomInformationResponse {
        this.thumbnail = thumbnail;
        return this;
    }

    setName(name: string): GetStudyRoomInformationResponse {
        this.name = name;
        return this;
    }

    setVideoUrl(videoUrl: string): GetStudyRoomInformationResponse {
        this.videoUrl = videoUrl;
        return this;
    }

    setDescription(description: string): GetStudyRoomInformationResponse {
        this.description = description;
        return this;
    }

    build(): GetStudyRoomInformationResponse {
        return this;
    }
}

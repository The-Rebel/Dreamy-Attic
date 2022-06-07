import { Expose } from "class-transformer";
import { IsString, IsUrl, Length } from "class-validator";

export class CreateStudyRoomRequest {
    @IsString()
    @Length(1, 255)
    thumbnail: string;

    @IsString()
    @Length(1, 255)
    name: string;

    @IsUrl()
    @Expose({ name: "video_url" })
    videoUrl: string;

    @IsString()
    @Length(1, 2000)
    description: string;
}

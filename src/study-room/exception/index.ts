import { NotFoundException } from "@nestjs/common";

export const StudyRoomNotFoundException = new NotFoundException("StudyRoom Not Found");

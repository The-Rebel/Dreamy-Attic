import { ConflictException, NotFoundException, UnauthorizedException } from "@nestjs/common";

export const UserNotFoundException = new NotFoundException("User Not Found");
export const NotMatchedPasswordException = new UnauthorizedException("Not Matched Password");
export const ConflictUserNameException = new ConflictException("Conflict User Name");

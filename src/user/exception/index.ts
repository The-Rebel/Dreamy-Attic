import { NotFoundException, UnauthorizedException } from "@nestjs/common";

export const UserNotFoundException = new NotFoundException("User Not Found");
export const NotMatchedPasswordException = new UnauthorizedException("Not Matched Password");

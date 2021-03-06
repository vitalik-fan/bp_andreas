import { CreateUserDto } from '../user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { TokenService } from '../token/token.service';
import { Request, Response } from 'express';
import { RegisterUserI } from "./dto/register-user.dto";
export declare class AuthController {
    private authService;
    private tokenService;
    constructor(authService: AuthService, tokenService: TokenService);
    registration(userDto: CreateUserDto): Promise<RegisterUserI>;
    login(userDto: CreateUserDto, response: Response, request: Request): Promise<Response<any, Record<string, any>>>;
    logout(response: Response, request: Request): Promise<Response<any, Record<string, any>>>;
}

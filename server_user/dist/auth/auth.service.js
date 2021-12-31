"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/user.entity");
const role_service_1 = require("../role/role.service");
const login_user_dto_1 = require("./dto/login-user.dto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const token_service_1 = require("../token/token.service");
const generate_token_dto_1 = require("../token/dto/generate-token.dto");
const mail_service_1 = require("../mail/mail.service");
let AuthService = class AuthService {
    constructor(usersRepository, userService, roleService, tokenService, mailService) {
        this.usersRepository = usersRepository;
        this.userService = userService;
        this.roleService = roleService;
        this.tokenService = tokenService;
        this.mailService = mailService;
    }
    async registration(userDto) {
        const user = await this.userService.create(userDto);
        const tokenPayload = new generate_token_dto_1.GenerateTokenDto(user.id, user.email, user.isActive, user.roles, user.name);
        const token = await this.tokenService.generateToken(tokenPayload);
        await this.mailService.confirmEmail(user.email);
        return { user, accessToken: token.accessToken };
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto);
        const userDto = new login_user_dto_1.UserDtoToClient(user);
        const tokenPayload = new generate_token_dto_1.GenerateTokenDto(user.id, user.email, user.isActive, user.roles, user.name);
        const token = await this.tokenService.generateToken(tokenPayload);
        return {
            accessToken: token.accessToken,
            user: userDto,
        };
    }
    async validateUser(loginDto) {
        const candidate = await this.usersRepository.findOne({
            where: { email: loginDto.email },
            relations: ['roles'],
        });
        if (!candidate) {
            throw new common_1.NotFoundException("The user with this email was not found");
        }
        const passEqual = await bcrypt.compare(loginDto.password, candidate.password);
        if (!passEqual) {
            throw new common_1.BadRequestException("Wrong password");
        }
        return candidate;
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        role_service_1.RoleService,
        token_service_1.TokenService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
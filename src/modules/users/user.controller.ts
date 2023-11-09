import {
    ApiDescription, ApiResponse, Body,
    JwtService, CRUDController,
    comparePassword, Controller, ErrorBuilder,
    Post,ResponseBuilder, ReqAuth, getQueryModel, IUserIdentity,
} from "@fasterjs/core";
import { User } from "./user.model";
import { LoginRequestDTO, RefreshTokenDTO, UserDTO } from "./dtos/user.request.dto";
import { LoginResponseDTO } from "./dtos/user.response.dto";

@Controller({
    apiPublics: ["post", "get"]
})
export class UserController extends CRUDController<User> {
    constructor(model: User, readonly jwtService: JwtService) {
        super(model);
    }

    @ApiResponse(LoginResponseDTO)
    @ApiDescription("The api login")
    @Post('/login', {
        isPublic: true
    })
    async login(@Body() body: LoginRequestDTO) {
        let users = await this.queryBuilder.find({
            email: { $eq: body.email },
        });
        if (!users.length) {
            throw ErrorBuilder.notFound("The password or email is incorrect");
        }

        const user = users[0];
        const check = await comparePassword(body.password, user)
        if (!check) {
            throw ErrorBuilder.notFound("The password or email is incorrect");
        }
        const result = await this.jwtService.createToken(user)
        return ResponseBuilder.json({ ...result }).get()
    }

    @ApiResponse(LoginResponseDTO)
    @ApiDescription("The api login")
    @Post('/refresh-token', {
        isPublic: true
    })
    async refreshToken(@Body() body: RefreshTokenDTO) {

        const result = await this.jwtService.refreshToken(body.refreshToken)
        return ResponseBuilder.json({ accessToken: result }).get()
    }

    @ApiResponse(UserDTO)
    @ApiDescription("The info user")
    @Post('/info')
    async test(@ReqAuth() user: IUserIdentity) {
        const result = await getQueryModel(User).with({
            model: "role"
        }).findOne({
            _id: {
                $eq: user.id
            },
        })
        if(!result){
            throw ErrorBuilder.notFound("");
        }
        return ResponseBuilder.json(result).get()
    }
}
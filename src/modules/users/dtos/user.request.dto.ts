import { ObjectId } from "mongodb";
import { Field } from "@fasterjs/core";

class RoleDTO {
    @Field("The index of user",{ isRequire: true })
    id!: string;

    @Field("The name of user",{ isRequire: true })
    name!: string;

}

export class UserDTO {
    @Field("The index of user",{ isRequire: true })
    id!: number;

    @Field("The name of user",{ isRequire: true })
    name!: string;

    @Field("The name of user",{ isRequire: true })
    email!: string;

    @Field("The role",{ isRequire: true,
        vectorProps: {
            elementDataType: RoleDTO
        }
    })
    role!: RoleDTO;
}


export class LoginRequestDTO {
    @Field("The email of user", { isRequire: true })
    email!: string;

    @Field("The password of user", { isRequire: true })
    password!: string;
}

export class RefreshTokenDTO {
    @Field("The refresh token", { isRequire: true })
    refreshToken!: string;

}

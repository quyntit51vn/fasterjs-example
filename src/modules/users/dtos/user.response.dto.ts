import { Field } from "@fasterjs/core";

export class LoginResponseDTO {
    @Field("The access token", { isRequire: true })
    accessToken!: string;

    @Field("The refresh Token", { })
    refreshToken?: string;
}

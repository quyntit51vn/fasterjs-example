import { Config as ConfigSonic } from "@fasterjs/core";

export interface Config extends ConfigSonic {
    JWT_SECRET: string
}

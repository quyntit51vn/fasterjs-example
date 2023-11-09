import { Config } from "./config";

export const config: Config = {
    ENV: process.env.ENV as string || "dev",
    PORT: process.env.PORT as unknown as number || 8000,
    JWT_SECRET: process.env.JWT_SECRET as string,
    DB_CONFIG: {
        TYPE: process.env.DB_TYPE as string,
        HOST: process.env.DB_HOST as string,
        PORT: process.env.DB_PORT as unknown as number,
        DATABASE: process.env.DB_NAME as string,
        USERNAME: process.env.DB_USERNAME as string,
        PASSWORD: process.env.DB_PASSWORD as string
    }
};
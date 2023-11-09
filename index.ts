import { Application } from "@fasterjs/core";
import { config } from "./src/configs/local";
import "./src/modules"

export const app = new Application(config)
app.run({
    middlwareAuthExtend: async (req, _res, _next) => {
        if(req.token){
            return true;
        }else{
            return false
        }
    },
    logDocApi: true
})


import { ApiDoc, DatabaseDoc } from "@fasterjs/core"
import "./src/modules"

new ApiDoc({
    title: "Minnato",
    description: "The doc api Minnato",
    version: "1.0.1"
}).run() 

new DatabaseDoc([]).run()
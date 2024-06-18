const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "busname": { type: String, require: true },
        "route": { type: String, require: true },
        "busno": { type: String, require: true },
        "drivername": { type: String, require: true }
    }
)


let busmodel = mongoose.model("bus", Schema)
module.exports = { busmodel }

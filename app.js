const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { busmodel } = require("./models/bus")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://annant2003:annant2003anna@cluster0.ncbl8ds.mongodb.net/busdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    let input = req.body
    let bus = new busmodel(input)
    bus.save()
    console.log(bus)
    res.json({ "status": "success" })
})

app.post("/search", (req, res) => {
        let input = req.body
        busmodel.find(input).then(
            (data)=> {
            res.json(data)
        }
    ).catch(
            (error) => {
                res.json(error)
            }
        )
}
)

app.post("/delete",(req,res)=>{
    let input=req.body
    busmodel.findByIdAndDelete(input._id).then(

        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
    
})

app.get("/view", (req, res) => {
    busmodel.find().then(
        (data) => {
            res.json(data)
        }
    ).catch(
        (error) => {
            res.json(error)
        }
    )

})
app.listen(3001, () => {
    console.log("server started")
})


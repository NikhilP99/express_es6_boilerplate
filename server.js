import express from "express"
import bodyParser from "body-parser"
import ran from "./test"
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(5000,()=>{
  console.log('running at 5000')
  console.log(ran)
})

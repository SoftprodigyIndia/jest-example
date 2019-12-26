import express from "express";
const app = express();
import { json } from "body-parser";

app.use(json());

let students = ["Elie", "Matt", "Joel", "Michael"];

app.get("/", (req, res) => {
  return res.json(students);
});

app.post("/insert",(req,res)=>{
   students.push(req.body.username)
   return res.json(students)
})

export default app;
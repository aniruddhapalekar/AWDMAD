const express=require('express')
const fs=require('fs')

const app=express()
app.use(express.json())

const port=3000
const host='localhost'


app.get('/',(req,res)=>{
    res.send("welcome.....this is practical no 7")
})

var reqbatch=[]
app.get('/class/batch/:id',(req,res,next)=>{
    const data=JSON.parse(fs.readFileSync('./class.json'))
    data.batches.map((batch)=>{
        if(batch.id==req.params.id)
            reqbatch=batch
    })
    console.log(reqbatch)
    next()
},
(req,res)=>{
    res.json(reqbatch)
})

var reqcourse=[]
app.get('/class/courses',(req,res,next)=>{
    reqcourse=JSON.parse(fs.readFileSync('./course.json'))
    reqcourse.courses.map((course)=>{
        console.log(`id:${course.id} course:${course.name}`)
         })
    next()
},
(req,res)=>{
    res.send(reqcourse.courses)
})

var totalResult = [];
const getBatches = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./class.json"));
  data.batches.map((batch) => totalResult.push(batch));
  console.log("Total result array: ");
  console.log(totalResult);
  next();
};
const getcourse = (req, res, next) => {
  const data = JSON.parse(fs.readFileSync("./course.json"));
  data.courses.map((course) => totalResult.push(course));
  console.log("Total result array: ");
  console.log(totalResult);
  next();
};
const sendData = (req, res) => {
  res.send(totalResult);
};
app.get("/gettotal", [getBatches, getcourse, sendData]);



app.listen(port,host,()=>{
    console.log(`listening on ${host} ar port no ${port}`)
})
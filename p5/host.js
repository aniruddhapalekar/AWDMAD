const express= require('express')

const app=express()
const port=3001
const host='192.168.43.119'

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(port,host,()=>{
    console.log(`server runnig at ${host} port no ${port}` )
})
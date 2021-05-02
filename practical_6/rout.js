const express=require('express')
const app=express()
const fs=require('fs')

app.use(express.json())

const host='localhost'

const port=3000

app.get('/',(req,res)=>{
    res.send('welcme.... use /class for more info')
})

app.get('/tycse*',(req,res)=>{
    res.send("this will take anything starting with tycse...for more info try /class at home")
})

app.get('/class',(req,res)=>{
    res.send("this is class TYCSE use /batch for more info")
})

app.get('/class/batch/:id',(req,res)=>{
    const data=JSON.parse(fs.readFileSync('./class.json'))

    var reqbatch={}

    data.batches.map((batch)=>{
        if(batch.id==req.params.id)
            reqbatch=batch
    })
    const result={
        msg:"info of given batch:-",
        data:reqbatch
    }

    res.send(result)

})

app.listen(port,host,()=>{
    console.log(`listenig on ${host} port no ${port}`)
})
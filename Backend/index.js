import express from 'express';
import {MongoClient, ObjectId} from 'mongodb'
import cors from 'cors';
const app = express()
const port = 3000


app.use(cors())

// const uri='mongodb://localhost:27017'
const uri = "mongodb+srv://MansiSharma:Mansi13114%40@cluster0.ld4md5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


const dbname='LivWell';

const client=new MongoClient(uri);
await client.connect();
console.log('connected')

const db=client.db(dbname);
const collection=db.collection('PROPERTIES');

app.get('/', async (req, res) => {
    const prop=await collection.find().toArray()
    console.log(prop);
    console.log('h')
    res.send(prop)
});

app.get('/rent/:id',async(req,res)=>{
    const id =req.params.id;
    console.log(id);
    const prop=await collection.findOne({_id:new ObjectId(id)})
    console.log(prop);
    res.json(prop)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
import express from 'express';
import {MongoClient, ObjectId} from 'mongodb'
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())

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

app.post('/properties', async (req, res) => {
    const property = req.body;
    console.log('Received property data:', property);
    const newProperty = {
        id: 9, // Starting ID (you can increment this dynamically if needed)
        title: property.title,
        price: property.price,
        rating: property.rating,
        location: property.location,
        beds: property.beds,
        baths: property.baths,
        area: property.area,
        image: property.image,
        featured: property.featured || false, // Default to false if not provided
        moreImages: property.moreImages || [], // Ensure it's an array
        description: {
            overview: property.description?.overview || '',
            propertySpecifications: property.description?.propertySpecifications || '',
            buildingAmenities: property.description?.buildingAmenities || '',
            neighborhood: property.description?.neighborhood || '',
            petPolicy: property.description?.petPolicy || '',
            leaseTerms: property.description?.leaseTerms || '',
        },
    };
    await collection.insertOne(newProperty)
    console.log("done saved")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
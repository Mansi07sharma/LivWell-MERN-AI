import express from 'express';
import { MongoClient, ObjectId } from 'mongodb'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())

// const uri='mongodb://localhost:27017'
const uri = `mongodb+srv://MansiSharma:Mansi13114%40@cluster0.ld4md5x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const dbname = 'LivWell';

const client = new MongoClient(uri);
await client.connect();
console.log('connected')

const db = client.db(dbname);
const collection = db.collection('PROPERTIES');

app.get('/', async (req, res) => {
    const prop = await collection.find().toArray()
    console.log(prop);
    console.log('hH')
    res.send(prop)
});

app.get('/rent/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const prop = await collection.findOne({ _id: new ObjectId(id) })
    console.log(prop);
    res.json(prop)
})

app.get('/search/:username', async (req, res) => {
    const username = req.params.username;
    console.log(username);

    try {
        const prop = await collection.find({ name: username }).toArray();

        if (prop.length === 0) {
            return res.status(404).json({ message: "No property found for this user." });
        }

        console.log(prop);
        res.json(prop); // Sends an array of properties
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

app.get('/search/user/:phone_no', async (req, res) => {
    console.log("here")
    const phone_no = req.params.phone_no;
    console.log(phone_no);

    try {
        const prop = await collection.find({ phoneNo: phone_no }).toArray();

        if (prop.length === 0) {
            return res.status(404).json({ message: "No property found for this user." });
        }

        console.log(prop);
        res.json(prop); // Sends an array of properties
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


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
        moreImages: property.moreImages.split(',').map(url => url.trim()), // Split the comma-separated string into an array of URLs
        description: {
            Overview: property.overview?.trim() || '',
            'Building Amenities': property.buildingAmenities?.trim() || '',
            'Property Specifications': property.propertySpecifications
                ? property.propertySpecifications.split(',').map(spec => spec.trim())
                : [],
            Neighborhood: property.neighborhood?.trim() || '',
            'Pet Policy': property.petPolicy?.trim() || '',
            'Lease Terms': property.leaseTerms?.trim() || ''
        },
        name: property.name,
        phoneNo: property.contact,
        longitude: parseFloat(property.longitude), // Converting longitude to double
        latitude: parseFloat(property.latitude),
    };

    console.log(newProperty)

    await collection.insertOne(newProperty)
    console.log("done saved")
    res.send('Ok')
})

app.delete('/delete/properties/:id', async (req, res) => {
    const id = req.params.id;
  
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }
  
    try {
        console.log('i am deleted', id)
      const result = await collection.deleteOne({ _id: new ObjectId(id) });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: 'Property not found' });
      }
  
      console.log('Deleted:', id);
      res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
      console.error('Error deleting property:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
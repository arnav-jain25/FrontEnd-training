const express = require('express');
const angularCRUD = express();
const cors=require('cors');
const dataBase = require('./connections');
const userDataModel = require('./userDataModel');
const bodyParser = require('body-parser');

//Express framework funcitons to use the RESTAPIs for operations
angularCRUD.use(cors());
angularCRUD.use(bodyParser.json({limit: '50mb'}));
angularCRUD.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
angularCRUD.use(express.json()); //parse incoming json request



// ---------------connecting the server to 3001 port-------------------
angularCRUD.listen(3001, () => {
    console.log('listening to port 3001');
})



//CRUD Operations

//C - posting the user data to mongodb 'users' collection upon registration
angularCRUD.post('/', async (req, res) => {
    const { name, email, password, phone, dob, gender, photo, isLoggedIn } = req.body;
    try {
        const newUser = await userDataModel.create({ name, email, password, phone, dob, gender, photo, isLoggedIn });
        res.json(newUser);
    }
    catch {
        res.status(500).send(error);
    }
})

//R - getting user data of all the users in the mongodb 'users' collection
angularCRUD.get('/', async (req, res) => {
    try {
        const users = await userDataModel.find();
        res.json(users);
    }
    catch {
        res.status(500).send(error);
    }
})

//R - getting single user data by id 
angularCRUD.get('/:userId', async (req, res) => {
    let { userId } = req.params
    try {
        const user = await userDataModel.findById(userId);
        res.json(user);
    }
    catch {
        res.status(500).send(error);
    }
})

//U - putting/updating userdata by userId post login 
angularCRUD.put('/:userId', async (req, res) => {
    const { userId } = req.params
    const { name, email, password, phone, dob, gender, photo, isLoggedIn } = req.body;
    try {
        const user = await userDataModel.findById(userId);
        await user.update({ name, email, password, phone, dob, gender, photo, isLoggedIn });
        res.json(user);
    }
    catch {
        res.status(500).send(error);
    }
})

//U - patching the logged in status to true post login
angularCRUD.patch('/:userId', async (req, res) => {
    const { userId } = req.params
    const { isLoggedIn } = req.body;
    try {
        const user = await userDataModel.findById(userId);
        await user.updateOne({ isLoggedIn });
        res.json(user);
    }
    catch {
        res.status(500).send(error);
    }
})

//D - deleting userdata by userId post login 
angularCRUD.delete('/:userId', async (req, res) => {
    const { userId } = req.params
    try {
        const user = await userDataModel.findById(userId);
        await user.delete();
        res.json('Deleted data successfully');
    }
    catch {
        res.status(500).send(error);
    }
})




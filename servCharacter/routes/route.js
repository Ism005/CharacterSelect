const express = require('express');
const User = require("../model/user");
const Champ = require("../model/champion");
const router = new express.Router();
const app = express();
const bcrypt = require('bcrypt');

router.post("/test", (req, res, next) => {
    res.json({message: "hellloooo!!"})
});


router.post("/login", async (req, res) => {
    try {
        const user = await User.findUser(req.body.email, req.body.password);
        const authToken = await user.generateAuthTokenAndSaveUser();
        console.log(user);
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

router.post("/create" , async (req  , res , next) => {
    console.log(req.body);
    let {password} = req.body;
    let pass = req.body.password
    try {
        if (password !== null && password !== undefined ) {
            const userr = new User(req.body);
            await  userr.save();
            res.status(201).send( userr );
        }
    } catch(e) {
        res.status(400).send(e);
    }
});

router.post("/register" , async (req  , res , next) => {
    console.log(req.body);
    let {password} = req.body;
    let pass = req.body.password
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        if (password !== null && password !== undefined ) {
            const userr = new User(req.body);
            await  userr.save();
            res.status(201).send( userr );
        }
    } catch(e) {
        res.status(400).send(e);
    }
});


router.get( '/users/:id', async (req, res, next) => {
    const userId = req.params.id;
    try {
        const userr = User.findById(userId);
        res.send(userr)
    } catch (e){
        res.status(500).send(e);
    }
});

router.post('/champ/create', async (req, res, next) => {
    try {
        const champp = new Champ (req.body)
        await champp.save();
        res.status(201).send ( champp );
    }
    catch(e) {
        res.status(400).send(e);
    }
});

router.get('/champ', async (req, res, next) => {
            try{
               const champp = await Champ.find({});
               res.send(champp);
            } catch(e){
                res.status(500).send(e);
            }
});



module.exports = router;

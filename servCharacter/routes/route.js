const express = require('express');
const User = require("../model/user");
const Champ = require("../model/champion");
const router = new express.Router();
const app = express();

router.post("/test", (req, res, next) => {
    res.json({message: "hellloooo!!"})
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

router.get( '/users', async (req, res, next) => {
    try {
        const userr = await User.find({});
        res.send(userr);
    } catch (e){
        res.status(500).send(e);
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

module.exports = router

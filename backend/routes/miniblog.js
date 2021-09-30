const Card = require('../models/Card');

const router = require('express').Router();

router.get('/', async (req, res) =>{
    console.log('get all blogs')

    try{
        allCards = await Card.find({});
        res.status(200).send(allCards);
    }catch(err){
        res.status(400).send(err);
    }
});

router.post('/', async (req, res) =>{
    console.log('new blog', req.body)

    const card = new Card({
        name: req.body.name,
        status: req.body.status,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author,
        userId: req.body.userId
    });

    try{
        const newCard = await card.save();
        res.status(200).send(newCard);
    }catch(err){
        res.status(400).send(err);
    }
});

router.patch('/', async (req, res) =>{
    console.log('edit blog', req.body._id)
    try{
        const card = await Card.findById(req.body._id);
        Object.assign(card, req.body);
        card.save()
        res.status(200).send(card);
    }catch(err){
        res.status(400).send(err);
    }
});

router.delete('/', async (req, res) =>{
    console.log('delete blog', req.body._id)
    try{
        const card = await Card.findById(req.body._id);
        await card.remove();
        res.status(200).send('successfully deleted!');
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports = router;
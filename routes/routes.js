var router = require('express').Router()
var fire = require('./firebase')
var bodyParser = require('body-parser')
var db = fire.firestore()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.get('/machine', (req, res)=>{
    db.collection('machines')
    .doc(req.query.uid).get()
    .then(snapshot => {
        console.log(snapshot.data())
        res.send(snapshot.data())
    }).catch((error)=>{
        console.log(error)
    })
})

router.post('/machine/on', (req, res)=>{
    db.collection('machines')
    .doc(req.body.uid)
    .update({activated: 1})
    res.send(req.body)
})

router.post('/machine/off', (req, res)=>{
    db.collection('machines')
    .doc(req.body.uid)
    .update({activated: 0, volume: 0})
    res.send(req.body)
})

router.post('/machine/volume', (req, res)=>{
    db.collection('machines')
    .doc(req.body.uid)
    .update({volume: parseInt(req.body.volume)})
    res.send(req.body)
})

module.exports = router
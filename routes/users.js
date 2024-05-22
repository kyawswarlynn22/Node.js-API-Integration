const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({mes: "All User Get."})
})

router.post('/', (req, res) => {
    res.status(200).json(req.body);
})

router.route('/:id')
.get((req, res) => res.status(200).json(req.params.id))
.patch((req,res) =>  res.status(200).json(req.body))
.delete((req,res) =>  res.status(200).json({ mes: `Delete id is ${req.params.id}`}))


module.exports = router;
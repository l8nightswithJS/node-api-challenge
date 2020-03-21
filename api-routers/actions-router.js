const express = require('express');
const ActionsRouter = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    const id = req.query.id;

    ActionsRouter.get(id)
        .then(actions => {
            if(actions) {
                res.status(200).json(actions); 
            } else if(actions.id) {
                res.status(200).json(actions);
            } else res.status(400).json({ err: "id not found" })
        })
        .catch(err => {
            res.status(500).json({ error: "entered id not found" });
        });
});

module.exports = router;
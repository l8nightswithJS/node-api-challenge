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



router.delete('/', (req, res) => {
    const {id} = req.body;
  
    ActionsRouter.remove(id)
    .then(actions => {
        res.status(200).json(actions, "id removed")
    })
    .catch(err => res.status(500).json({err: "not found"}))
  });



module.exports = router;
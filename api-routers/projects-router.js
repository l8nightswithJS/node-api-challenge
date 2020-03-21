const express = require('express');
const ProjectsRouter = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    const id = req.query.project_id;

    ProjectsRouter.getProjectActions(id)
        .then(projects => {
            if(id[0] == !null) {
                res.status(200).json({projects});
            } else {
                res.status(400).json({ err: "id not found" })
            } 
        })
        .catch(err => {
            res.status(500).json({ error: "entered id not found" });
        });
});






module.exports = router;
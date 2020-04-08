const express = require('express');
const ProjectsRouter = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {

    ProjectsRouter.get()
        .then(projects => {
            res.status(200).json({projects});
        })
        .catch(err => {
            res.status(500).json({ error: "entered id not found" });
        });
});

router.get('/actions', (req, res) => {
    const id = req.query.project_id;

    ProjectsRouter.getProjectActions(id)
        .then(actions => {
            if(id[0] === !null) {
                res.status(200).json({actions});
            } else {
                res.status(400).json({ err: "id not found" })
            } 
        })
        .catch(err => {
            res.status(500).json({ error: "entered id not found" });
        });
});

router.post('/projects', (req, res) => {
    const project = req.body;

    ProjectsRouter.insert(project)
        .then(project => {
            if(project) {
                res.status(200).json(project);
            } else {
                res.status(400).json({ err: "id not found" })
            } 
        })
        .catch(err => {
            res.status(500).json({ error: "entered id not found" });
        });
});

router.put('/', (req, res) => {
    const id = req.params;
    const info = req.body;

    ProjectsRouter.update(id, info)
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ err: "entered id not found" });
        });
});









module.exports = router;
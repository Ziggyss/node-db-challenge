const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      const updatedProjects = projects.map(project => {
        if (project.complete) {
          return { ...project, complete: true };
        } else {
          return { ...project, complete: false };
        }
      });
      res.json(updatedProjects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get any projects" });
    });
});

module.exports = router;

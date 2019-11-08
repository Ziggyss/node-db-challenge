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
      res
        .status(500)
        .json({ message: "Failed to get any projects: " + err.message });
    });
});

router.get("/resources", (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "Failed to get the resources: " + err.message });
    });
});

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
  .then(tasks => {
      res.status(200).json(tasks)
  })
  .catch(err => {
      res.status(500).json({
          message: "Failed to get the tasks: " + err.message
      })
  })
});

module.exports = router;

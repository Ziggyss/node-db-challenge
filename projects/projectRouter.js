const express = require("express");

const Projects = require("./project-model");

const router = express.Router();

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

// router.get("/resources", (req, res) => {
//   Projects.getResources()
//     .then(resources => {
//       res.json(resources);
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ message: "Failed to get the resources: " + err.message });
//     });
// });

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

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Projects.getProjectById(id).then(project => {
    res.json(project);
  });
});

// router.get("/resources", (req, res) => {
//     res.send("it works now")
//     // Projects.getResources()
//   .then(resources => {
//     res.json(resources);
//   })
//   .catch(err => {
//     res
//       .status(500)
//       .json({ message: "Failed to get the resources: " + err.message });
//   });
// });

router.get("/:id/tasks", (req, res) => {
  const { id } = req.params;
  Projects.getTasks(id)
    .then(tasks => {
      const updatedTasks = tasks.map(task => {
        if (task.complete) {
          return { ...task, complete: true };
        } else {
          return { ...task, complete: false };
        }
      });
      res.status(200).json(updatedTasks);
    })
    .catch(err => {
      res.status(500).json({
        message: "Failed to get the tasks: " + err.message
      });
    });
});

router.get("/:id/resources", (req, res) => {
  const { id } = req.params;
  Projects.getResourcesByProject(id)
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting the resources: " + err.message
      });
    });
});

router.post("/", (req, res) => {
  const newProject = req.body;
  Projects.addProject(newProject)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error posting project: " + err.message
      });
    });
});

router.post("/resources", (req, res) => {
  const newResource = req.body;
  Projects.addResource(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error posting resource: " + err.message
      });
    });
});

router.post("/:id/tasks", (req, res) => {
  const { id } = req.params;
  const newTask = req.body;
  Projects.addTask(id, newTask)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error while adding task: " + err.message
      });
    });
});

module.exports = router;

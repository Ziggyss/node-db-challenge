const db = require("../data/db-config");

module.exports = {
  getProjects,
  getProjectById,
  addProject,
  getTasks,
  addTask,
  getResources,
  addResource,
  getResourcesByProject
};

function getProjects() {
  return db("projects");
}

function getProjectById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getResources() {
  return db("resources");
}

function getResourcesByProject(id){
    return db("projects as p")
    .join("project_resources as pr", "p.id", "pr.project_id")
    .join("resources as r", "r.id", "pr.resource_id")
    .select("p.project_name", "r.resource_name", "r.resource_description")
    .where("p.id", id)
}

function getTasks(project_id) {
  return db("tasks")
  .join("projects", "tasks.project_id", "projects.id")
  .select("tasks.task_description", "projects.project_name", "tasks.complete")
  .where({ project_id });
  
}

function addProject(project) {
  return db("projects").insert(project);
  // .then()
}

function addResource(resource) {
  return db("resources").insert(resource);
}

function addTask(id, task) {
  return db("tasks")
    .insert({ ...task, project_id: id })
    // .then((id) => getTasks(id));
}


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
    .select("p.name", "r.name", "r.description")
    .where("p.id", id)
}

function getTasks(project_id) {
  return db("tasks").where({ project_id });
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

// function getShoppingList(id) {
//   return db("shopping_list as s")
//     .join("recipe_names as r", "s.recipe_id", "r.id")
//     .join("ingredients as i", "s.ingredient_id", "i.id")
//     .select("r.recipe_name", "s.quantity", "i.ingredient")
//     .where({ recipe_id: id });
// }

// function getInstructions(id) {
//   return db("recipe_steps")
//     .join("instructions", "instructions.id", "recipe_steps.step_id")
//     .join("recipe_names", "recipe_steps.recipe_id", "recipe_names.id")
//     .select(
//       "recipe_names.recipe_name",
//       "instructions.instruction",
//       "recipe_steps.step_number"
//     )
//     .where({ recipe_id: id })
//     .orderBy("step_number", "asc");
// }

// function getRecipesByIngredient(id){
// console.log()
//     return db("shopping_list as s")
//     .join("ingredients as i", "i.id", "s.ingredient_id")
//     .join("recipe_names as r", "r.id", "s.recipe_id")
//     .select("r.recipe_name", "i.ingredient" )
//     .where({"i.id": id})
// }

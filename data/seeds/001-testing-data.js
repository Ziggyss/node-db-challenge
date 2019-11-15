exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_name: "Build a house",
          project_description: "Raise a lot of money and build that dream home",
          complete: false
        },
        {
          project_name: "Create an app",
          project_description: "Pick a need and make an app for that",
          complete: false
        },
        {
          project_name: "Finish the sprint challenge on time",
          project_description: "On time, I said, on time!",
          complete: false
        }
      ]);
    });
};

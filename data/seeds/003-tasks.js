exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "Buy bricks",
          notes: "Get money first",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Buy cement",
          notes: "",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Get to it!",
          notes: "Maybe ask for help",
          complete: false,
          project_id: 1
        },
        {
          task_description: "Research",
          notes: "Reserch is king",
          complete: false,
          project_id: 2
        },
        {
          task_description: "Learn how to code",
          notes: "Slowly",
          complete: false,
          project_id: 2
        },
        {
          task_description: "Write some code",
          notes: "Slowly as well",
          complete: false,
          project_id: 2
        },
        {
          task_description: "Read the readme",
          notes: "Of course",
          complete: false,
          project_id: 3
        },
        {
          task_description: "Work through the tasks",
          notes: "Do your best",
          complete: false,
          project_id: 3
        },
        {
          task_description: "Make a pull request before 11",
          notes: "Make sure you do!",
          complete: false,
          project_id: 3
        }
      ]);
    });
};

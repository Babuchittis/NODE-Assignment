const taskManager = require("./taskManager");

const tasks = taskManager.getTasks();

console.log("Tasks from Custom Module:");
console.log(tasks);
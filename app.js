// const taskManager = require("./taskManager");

// const tasks = taskManager.getTasks();

// console.log("Tasks from Custom Module:");
// console.log(tasks);





// const taskManager = require("./taskManager");

// taskManager
//     .getTasksPromise()
//     .then(tasks => {
//         console.log("Tasks using Promise:");
//         console.log(tasks);
//     })
//     .catch(err => {
//         console.log(err);
//     });





const express = require("express");
const dayjs = require("dayjs");
const taskManager = require("./taskManager");

const app = express();
const PORT = 8080;

// Default Route
app.get("/", (req, res) => {
    const currentDate = dayjs().format("DD-MM-YYYY HH:mm:ss");

    res.send(`Current Date & Time: ${currentDate}`);
});

// Tasks Route
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await taskManager.getTasksPromise();
        res.json(tasks);
    } catch (error) {
        res.status(500).send("Error loading tasks");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
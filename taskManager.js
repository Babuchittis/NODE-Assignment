// Task1


// const fs = require("fs");
// const path = require("path");

// // Global Object (__dirname)
// const filePath = path.join(__dirname, "data.json");

// // Read and display file content
// fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//         console.log("Error reading file:", err);
//         return;
//     }

//     console.log("Data from JSON:");
//     console.log(JSON.parse(data));
// });




// // Custom Module Function
// function getTasks() {
//     const data = fs.readFileSync(filePath, "utf8");
//     return JSON.parse(data);
// }

// module.exports = {
//     getTasks
// };




// Task2

// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "data.json");

// // Promise Function
// function getTasksPromise() {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filePath, "utf8", (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(JSON.parse(data));
//             }
//         });
//     });
// }

// module.exports = {
//     getTasksPromise
// };




// Task3


const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data.json");

function getTasksPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

module.exports = {
    getTasksPromise
};
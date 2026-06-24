const fs = require("fs");
const path = require("path");

// Global Object (__dirname)
const filePath = path.join(__dirname, "data.json");

// Read and display file content
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("Data from JSON:");
    console.log(JSON.parse(data));
});

// Custom Module Function
function getTasks() {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
}

module.exports = {
    getTasks
};
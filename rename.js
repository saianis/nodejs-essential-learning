const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json", err => {
    if (err) {
        throw err;
    }
});


fs.renameSync("./assets/notes.md", "./storage-files/notes.md", err => {
    if (err) {
        throw err;
    }
});


setTimeout(() => {
    fs.unlinkSync("./assets/anish.jpg");
}, 4000);

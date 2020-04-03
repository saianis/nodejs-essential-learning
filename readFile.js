const fs= require("fs");


fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An error occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    
    console.log(text);
});


fs.readFile("./assets/anish.jpg", (err, img) => {
    if (err) {
        console.log(`An error occured: ${err.message}`);
        process.exit();
    }
    console.log("file contents read");
    
    console.log(img);
});


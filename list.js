const fs= require("fs");

fs.readdir("./assets", (err, files) => {
    if (err) {
        throw err;
    }
    
    console.log('complete');
    console.log(files);    
})


console.log('start');
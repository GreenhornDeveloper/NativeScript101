let fs = require("file-system");
let diagModule = require("ui/dialogs");
let fileName = "myfile.json";
let file = fs.knownFolders.documents().getFile(fileName);

file.clear();

// read from the file
file.readText().then(function(content) {
    console.log(content)
}).catch(function(error){
    console.log("something broke!!")
});


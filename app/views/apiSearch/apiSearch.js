let frameModule = require('ui/frame');
let config = require('../../shared/config');
let observableModule = require("data/observable");
let topmost, page, searchTerm;
var http = require("http");

let fs = require("file-system");
let diagModule = require("ui/dialogs");
let fileName = "myfile.json";
let file = fs.knownFolders.documents().getFile(fileName);

let searchObj = new observableModule.fromObject({
    searchTerm: ''
})

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = searchObj
}

// need to put a real API KEY in the config file for this to work

exports.getTopAlbums = function() {
    // console.log("ok")
    let url = `${config.url}?${config.getTopAlbums}=${searchTerm}&${config.apiKey}&format=json`;
    http.getString(url)
    .then(function (response) {
        console.log("response", response)
        file.writeText(response);
        diagModule.alert({
            message: "File Saved",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
        }).then(function (r) {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
        
    }, function (error) {
        diagModule.alert({
            message: "Something went wrong",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
        }).then(function (r) {
            console.log("Dialog result: " + r.result + ", text: " + r.text);
        });
    });
};


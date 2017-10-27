//require the frame to get the root level container
var frameModule = require("ui/frame");
var topmost = frameModule.topmost();

exports.navToSearch = function(args) {
    topmost = frameModule.topmost();
    topmost.navigate("views/apiSearch/apiSearch")
};

exports.navToCamera = function(args) {
    topmost = frameModule.topmost();
    topmost.navigate("views/camera/camera")
};

exports.navToFile = function(args) {
    topmost = frameModule.topmost();
    topmost.navigate("views/fileSystem/fileSystem")
};

exports.navToConnectivity = function(args) {
    topmost = frameModule.topmost();
    topmost.navigate("views/connectivity/connectivity")
};

//navigation with data
exports.passData = function() {
    topmost = frameModule.topmost();
    let navContext = {
        moduleName: "views/passedData/passedData",
        context: {info: "Hi All things Open"},
        animated: false
    }
    topmost.navigate(navContext);
};

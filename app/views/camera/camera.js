let camera = require("nativescript-camera");
let fs = require("file-system");
let imageModule = require("ui/image");
let observableModule = require("data/observable");
let isAvailable = camera.isAvailable();

console.log(isAvailable)

let imgSrc = new observableModule.fromObject({
    img: ''
})

exports.onNavigatingTo = function(args) {
    const page = args.object;
    page.bindingContext = imgSrc
}

exports.takePicture = function(){
    //get permissions, set in info.plist
    let cameraOpts = {
        width: 300,
        height:300,
        keepAspectRatio: false,
        saveToGallery: true
    }

    if(isAvailable){
        imgSrc.img = '';
        camera.requestPermissions();
        camera
            .takePicture(cameraOpts)
            .then(function(imageAsset){
                imgSrc.img = imageAsset
            })
            .catch(function(err){
                console.log("error -> ", err.message)
            })
    } else{
        console.log(" Sorry, no camera")
    }
    
}
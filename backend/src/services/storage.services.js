var ImageKit = require("imagekit");
require("dotenv").config();


var imagekit = new ImageKit({
     publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

 function uploadFile(file, fileName){
    return imagekit.upload({
        file, fileName
    })
     
}

module.exports = uploadFile
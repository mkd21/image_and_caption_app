
const ImageKit = require("@imagekit/nodejs");


const imageKit = new ImageKit({
    privateKey : process.env.IMAGE_KIT_PRIVATE_KEY
});


const uploadToImageKit = async function(fileBuffer , fileName){

   const file = await ImageKit.toFile(fileBuffer , fileName);
   
    const response = await imageKit.files.upload({
        file : file,
        fileName : fileName,
        folder : "/posts"  
    });

    return response;
}


module.exports = uploadToImageKit;
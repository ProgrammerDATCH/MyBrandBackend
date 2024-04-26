var cloudinary = require("cloudinary").v2;

const cloud_name = process.env.CLOUDINARY_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_KEY_SECRET;

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

const opts = { 
  overwrite: true,
  invalidate: true,
  resource_type: "auto",
};

const uploadImage = (image: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(image, opts, (error: any, result: any) => {
      if (result && result.secure_url) {
        return resolve(result.secure_url);
      }
      // return reject({ message: error.message });
    });
  });
};

export default uploadImage;
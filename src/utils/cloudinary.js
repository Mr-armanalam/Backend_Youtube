import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'


 cloudinary.config({
   cloud_name: process.env.CLOUDINARTY_CLOUD_NAME,
   api_key: process.env.CLOUDINARTY_API_KEY,
   api_secret: process.env.CLOUDINARTY_API_SECRET,
 });

 const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {resource_type:"auto"})
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary")
        console.log(response)
        console.log(response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporaray file as the upload operation got failed 
        return null;
    }
 }

export {uploadOnCloudinary}
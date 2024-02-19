import {v2 as cloudinary} from 'cloudinary'
import fs from "fs"

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:  process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_SECRET,
});

const uploadONCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploaded in cloudinary",response,response.url)
        return response
    } catch (error) {
        fdatasync.unlinkSync(localFilePath) //remove the locally saved temporary file 
        return null;
    }
}
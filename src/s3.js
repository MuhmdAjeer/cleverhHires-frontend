import { uploadFile } from 'react-s3';
import { Buffer } from "buffer";

Buffer.from("anything", "base64");
window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = 'cleverehires';
const REGION = process.env.REACT_APP_REGION
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;


const config = {
    bucketName: S3_BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_ACCESS_KEY,
}

export const handleUpload = async (file) => {

    return new Promise((resolve,reject)=>{
        uploadFile(file, config)
        .then(data => {
            resolve(data)
        })
        .catch(err => reject(err))      
    })

}
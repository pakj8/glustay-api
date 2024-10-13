const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { s3 } = require("../../constant/s3");

exports.file = async (file) => {
  const { createReadStream, filename, mimetype } = await file;
  const fileStream = createReadStream();

  const uniqueFilename = `${uuidv4()}-${path.basename(filename)}`;

  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME, // Replace with your S3 bucket name
    Key: `uploads/${uniqueFilename}`, // File path in S3
    Body: fileStream,
    ContentType: mimetype, // File MIME type
  };

  // Upload file to S3
  // return new Promise((resolve, reject) => {
  //   s3.upload(uploadParams, (err, data) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve({
  //         url: data.Location, // File URL in S3
  //         public_id: data.Key, // S3 file key
  //       });
  //     }
  //   });
  // });

  const { Location } = await s3.upload(uploadParams).promise();

  return {
    url: Location, // File URL in S3
  };
};

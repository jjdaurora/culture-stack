module.exports = (app, AWS, Busboy, dotenv) => {

    dotenv.config();

    function uploadToS3(file) {
        let s3bucket = new AWS.S3({
            accessKeyId: process.env.IAM_USER_KEY,
            secretAccessKey: process.env.IAM_USER_SECRET
        });
        s3bucket.createBucket(function () {
            var params = {
                Bucket: process.env.BUCKET_NAME,
                Key: file.name,
                Body: file.data
            };
            s3bucket.upload(params, function (err, data) {
                if (err) {
                console.log('error in callback');
                console.log(err);
                }
                console.log('success');
                console.log(data);
            });
        });
    }

  // The following is an example of making file upload with additional body
  // parameters.
  // To make a call with PostMan
  // Don't put any headers (content-type)
  // Under body:
  // check form-data
  // Put the body with "element1": "test", "element2": image file

  app.post('/api/upload', function (req, res, next) {

    // This grabs the additional parameters so in this case passing in
    // "element1" with a value.
    // This grabs the additional parameters so in this case passing     
    // in "element1" with a value.
   console.log(req.headers);
   const element1 = req.body.element1;
   var busboy = new Busboy({ headers: req.headers });
   // The file upload has completed
   busboy.on('finish', function() {
    console.log('Upload finished');
    // Your files are stored in req.files. In this case,
    // you only have one and it's req.files.element2:
    // This returns:
    // {
    //    element2: {
    //      data: ...contents of the file...,
    //      name: 'Example.jpg',
    //      encoding: '7bit',
    //      mimetype: 'image/png',
    //      truncated: false,
    //      size: 959480
    //    }
    // }
    // Grabs your file object from the request.
    const file = req.files.element2;
    console.log(file);
    uploadToS3(file);
   });
   req.pipe(busboy);
  });
}
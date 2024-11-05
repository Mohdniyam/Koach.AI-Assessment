const { S3 } = require("@aws-sdk/client-s3");
const s3 = new S3({ region: 'us-east-1' });
module.exports.handler = async (event) => {
  try {
    if (!event.body) throw new Error("Request body is missing");

    const data = JSON.parse(event.body);
    const bucketName = 'task-1-json-storage-bucket';
    const key = `${Date.now()}-${Math.floor(Math.random() * 100000)}.json`;

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: JSON.stringify(data),
      ContentType: 'application/json'
    };
  const response = await s3.putObject(params);
    return {
      statusCode: 200,
      body: JSON.stringify({
        e_tag: response.ETag,
        url: `https://${bucketName}.s3.${s3.config.region}.amazonaws.com/${key}`
      })
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error.message })
    };
  }
};

# Koach.AI-Assessment
Koach.AI Assessment


AWS Lambda and S3 API Project

Description

This project creates a simple AWS-based web service that allows users to store and retrieve JSON data via REST API endpoints. Using AWS API Gateway and AWS Lambda, the service provides:

A POST endpoint for storing JSON data in an S3 bucket.
A GET endpoint for retrieving all stored JSON data from the S3 bucket.
This project serves as an introduction to serverless computing, cloud storage, and API development on AWS.

Table of Contents

Prerequisites
Architecture
Setup
API Endpoints
POST Endpoint
GET Endpoint
Testing
Error Handling
License
Prerequisites

To complete this project, you'll need:

An AWS account
Basic knowledge of AWS services (S3, Lambda, API Gateway)
AWS CLI configured on your local machine
Architecture

This project uses:

AWS S3: Stores JSON files.
AWS Lambda: Processes requests and interacts with S3.
AWS API Gateway: Provides the REST API endpoints for users to interact with the service.
Setup

1. Set Up AWS Resources
Create a Public S3 Bucket:
Go to the S3 console.
Create a new bucket, make it publicly accessible, and note the bucket name.
Enable necessary permissions to allow Lambda functions to store and retrieve JSON files.
Create an API Gateway:
Go to the API Gateway console.
Create a new REST API.
Set up two endpoints (POST and GET) and link them to Lambda functions (steps below).
Set Up Lambda Functions:
Go to the Lambda console.
Create two Lambda functions: one for POST requests and another for GET requests.
Grant necessary permissions to interact with S3 by attaching an IAM role with S3 access to the Lambda functions.
API Endpoints

POST Endpoint
URL: https://gl5gsslhil.execute-api.ap-south-1.amazonaws.com/task1Stage/store
Purpose: Stores JSON data sent by the user in an S3 bucket.
Request: A JSON payload in the body.
Response:
e_tag: The ETag of the stored S3 object.
url: The URL of the JSON file in S3.

Example Usage

Send a POST request to the endpoint with a JSON payload (e.g., {"name": "John", "age": 30}).
Example using curl:

curl -X POST \
  https://gl5gsslhil.execute-api.ap-south-1.amazonaws.com/task1Stage/store \
  -H "Content-Type: application/json" \
  -d '{"name": "faizaul", "age": 23}'


{"e_tag":"\"bc8715527ba0860a770387d60c171092\"",
"url":"https://task-1-json-storage-bucket.s3.async () => {\n    if (runtimeConfig.region === void 0) {\n      throw new Error(\"Region is missing from runtimeConfig\");\n    }\n    const region = runtimeConfig.region;\n    if (typeof region === \"string\") {\n      return region;\n    }\n    return region();\n  }.amazonaws.com/1730793948966-81299.json"
}

GET Endpoint
URL: https://gl5gsslhil.execute-api.ap-south-1.amazonaws.com/task1Stage/retrieve
Purpose: Retrieves all stored JSON data from the S3 bucket.
Response: An array of JSON objects representing each file stored in the S3 bucket.


Example Usage

Send a GET request to retrieve all stored JSON files.
Example using curl:

curl -X GET https://gl5gsslhil.execute-api.ap-south-1.amazonaws.com/task1Stage/retrieve


Responds with:
[{"name":"John","age":30},{"name":"John","age":30},{"name":"John","age":30},{"name":"John","age":30},{"name":"John","age":30},{"name":"John","age":30},{"name":"Haque","age":55},{"name":"Haqeeue","age":55},{"name":"faizaul","age":23},{"name":"Noyam"}]

Testing

To test the endpoints, use tools like Postman or curl.

Testing the POST Endpoint:
Send a POST request with a JSON payload to the endpoint.
Verify that the JSON data is stored in S3.
Check the response for e_tag and url to confirm successful storage.
Testing the GET Endpoint:
Send a GET request to retrieve all stored JSON files.
Verify that the response contains all JSON objects stored in the S3 bucket.
Error Handling

Invalid JSON: Return a 400 Bad Request error if the JSON payload is invalid.
S3 Access Issues: Return a 500 Internal Server Error if there’s an issue accessing S3.
Missing Store ID: Return a 404 Not Found error if no storeId is provided in the request.
License

This project is licensed under the MIT License.
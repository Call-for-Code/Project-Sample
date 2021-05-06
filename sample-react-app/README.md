[![Website](https://img.shields.io/badge/View-Website-blue)](https://sample-project.s3-web.us-east.cloud-object-storage.appdomain.cloud)

# Getting Started with Sample React App

Sample React App is a simple react web app that can be used as a template/starting point for working with React Web framework. 

Instructions to run the Sample React App;
1. [Local Development](#run-the-sample-react-app-for-local-development)
2. [IBM Cloud](#run-the-sample-react-app-on-IBM-cloud)

### Run the Sample React App for local development
#### Pre-requisites
1. [Install Node and NPM](https://nodejs.org/en/download/)

#### Build the App
- Start a terminal/CMD in `~/Project-Sample/sample-react-app` directory.
- Execute command `npm install`.

#### Run the App
- Execute command `npm start`.
- Open a web browser and enter `http://localhost:3000`.

#### Run App tests
- Execute command `npm test`.

### Run the Sample React App on IBM Cloud
#### Pre-requisites
1. IBM Cloud Account:
    - [Create free IBM Cloud account with $200 USD in credits](https://developer.ibm.com/callforcode/get-started/)

#### Build the App for production
- Start a terminal/CMD in `~/Project-Sample/sample-react-app` directory.
- Execute command `npm install` and `npm run build`.

A production ready app's build folder with all dependencies will be created in the `~/Project-Sample/sample-react-app/build` directory.

#### Deploy the App in [IBM Cloud Object Storage](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-getting-started-cloud-object-storage)
- Log into your [IBM Cloud account](https://cloud.ibm.com/login).
- Enter `Object Storage` in the console's search bar and select **Object Storage**.
  <p align="left">
    <img src="../images/COS/cosSelect.png" width ="30%" height="30%">
  </p>
- Next configure the Object Storage by selecting the right plan **Lite** or **Standard** as per your requirement, enter a **Service name**, **select a resource group** and optionally enter a **Tags**.
  <p align="left">
    <img src="../images/COS/cosCreateService.png" width ="30%" height="30%">
  </p>
- Now your Object Storage will be created and you will be routed to its dashboard. Select **Create bucket** tab and click on **Create Bucket** button.
  <p align="left">
    <img src="../images/COS/cosCreateBucket.png" width ="30%" height="30%">
  </p>
- Configure the bucket by entering a **Unique bucket name**, select the required **Resiliency**, **Locaton** and **Storage class** options. Then under **Rules & Policies** configure **Static website hosting** by clicking **Add rule**, turn on the **Public access** switch and enter `index.html` for **Index document** placeholder and save. Finally click **Create Bucket** button end of the page.
    <p align="left">
      <img src="../images/COS/cosBucketConfig1.png" width ="30%" height="30%">
    </p>
    <p align="left">
      <img src="../images/COS/cosBucketConfig2.png" width ="30%" height="30%">
    </p>

- Now a bucket will be created and shown in your Cloud Object Storage dashboard. Click on the bucket created.
    <p align="left">
      <img src="../images/COS/cosBucketCreated.png" width ="30%" height="30%">
    </p>

- Click on the **Upload** button and upload all the contents in `~/Project-Sample/sample-react-app/build` directory which was created when you built the app. 
**NOTE:** You will have to **Install Aspera connect** to upload large files and any folders. For this sample react app you need to use **Aspera connect** to upload the **static** folder in `~/Project-Sample/sample-react-app/build` directory.
    <p align="left">
      <img src="../images/COS/cosUpload.png" width ="30%" height="30%">
    </p>

- Once uploading is complete, select **Configuration** for the bucket.
    <p align="left">
      <img src="../images/COS/cosAppURL1.png" width ="30%" height="30%">
    </p>

- Scroll down to the very bottom of the page and you will find the URL endpoints for the App that can be shared to access the Sample react app in the browser.
    <p align="left">
      <img src="../images/COS/cosAppURL2.png" width ="30%" height="30%">
    </p>

### Important Notes:

  - Once a Bucket is created for a Cloud Object Storage, don't delete it. You can build your App with new changes and upload the `~/Project-Sample/sample-react-app/build` contents for the same Bucket. If you delete the Bucket you won't be able create another with the same name and you will have to wait for 7 days for the same name. Learn more about the [Cloud Object Storage delete bucket](https://cloud.ibm.com/docs/cloud-object-storage?topic=cloud-object-storage-compatibility-api-bucket-operations#compatibility-api-delete-bucket).

  - If your Cloud Object Storage (COS) is Lite/Free plan then it will be deleted after 30 days of inactivity. Keep your COS active by accessing the website or update/upload the bucket once in a while every month.

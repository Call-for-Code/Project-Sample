[![Website](https://img.shields.io/badge/View-Website-blue)](https://sample-angular-app-funny-oribi.mybluemix.net/)

# Getting Started with Sample Angular App

Sample Angular App is a simple angular web app that can be used as a template/starting point for working with Angular Web framework. 

Instructions to run the Sample Angular App;
1. [Local Development](#run-the-sample-react-app-for-local-development)
2. [IBM Cloud](#run-the-sample-react-app-on-IBM-cloud-for-free)

### Run the Sample Angular App for local development
#### Pre-requisites
1. [Install Node and NPM](https://nodejs.org/en/download/)

#### Build the App
- Start a terminal/CMD in `~/Project-Sample/sample-angular-app` directory.
- Execute command `npm install`.

#### Run the App
- Execute command `npm start` or `ng serve`.
- Open a web browser and enter `http://localhost:4200`.

### Deploy and Run the Sample Angular App on IBM Cloud for Free
#### Pre-requisites
1. IBM Cloud Account:
    - [Create free IBM Cloud account with $200 USD in credits](https://developer.ibm.com/callforcode/get-started/)
2. [Install Node and NPM](https://nodejs.org/en/download/)

#### Build the App for production
- Start a terminal/CMD in `~/Project-Sample/sample-angular-app` directory.
- Execute command `npm install` and `npm run build-prod`.

A production ready, optimized app dist folder with all dependencies will be created in the `~/Project-Sample/sample-angular-app/dist/sample-angular-app` directory.

#### Deploy the App on IBM Cloud

The App can deployed on IBM Cloud for free with following two free services;
1. [IBM Cloud Object Storage](./docs/IBM_CLOUD_OBJECT_STORAGE_DEPLOYMENT.md)
2. [IBM Cloud Foundry](./docs/IBM_CLOUD_FOUNDRY_DEPLOYMENT.md)
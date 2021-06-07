[![Website](https://img.shields.io/badge/View-Website-blue)](https://sample-project.s3-web.us-east.cloud-object-storage.appdomain.cloud)

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






























# SampleAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

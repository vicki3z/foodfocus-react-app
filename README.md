This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This web application is for https://www.foodfocusthailand.com which using ReactJS and connect to Wordpress via REST API

## How to spin up the application?
* `yarn install` to download all dependencies;
* `yarn start` start up a localhost:3000 of the application
* `yarn build` compile and build the production version in `/build` folder

## How to test the web application locally?
* run `yarn start`
* go to `http://localhost:3000/index.html` and you'll on the homepage

## Deployment
After running `yarn build`, you will have the production-ready code in `/build` folder.
* use any FTP client of your choice and connect to Foodfocusthailand ftp server
* transfer everything under `/build` folder to the ftp server

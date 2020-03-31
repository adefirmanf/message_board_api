# MESSAGE BOARD API
Submission Test by Xendit

## Installation 

### Prerequisite

* Postgres
* Node

### Download & Install

#### Clone this repository

```git clone https://github.com/adefirmanf/message_board_api```

#### Install all dependencies 

```npm install --save```

#### Create your .env file
This project using `dotenv` to load environment variable. To change the value of env, make sure you copy `env.sample` file and rename to `.env`.

`.env.sample` should be located in your project root directory. 


#### Running migrations 

```npm run postinstall```

----

### Run application

By default, the app will listening on port 3000. If you set the port, it will be listening to the port you was set in `.env`. 

```npm run start```


### Documentation
Looking for API Documentation? 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/d1a1d368dc6968847366)

For more info, you can check our wiki

https://github.com/adefirmanf/message_board_api/wiki/API-Documentation

### Test & Coverage check

#### Service test & E2E test

```npm run test```

#### Run coverage test

```npm run test-with-coverages```


#### To-Do 
* CI / CD with Github Action
* Dockerize

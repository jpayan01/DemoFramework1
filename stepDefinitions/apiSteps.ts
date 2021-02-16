const request = require('supertest');
// import {request} from "supertest";
import { Given, When, Then } from "cucumber";

let endPoint = "http://dummy.restapiexample.com/api/v1";
// let endPoint = "http://dummy.restapiexample.com/api/v1/create";

//******FOR API DEMO******\\
Given('I set a POST request to employee service api endpoint', () =>{
    console.log('Adding URL ' + endPoint);
});

When('I send a POST HTTP request', function(response) {
    request(endPoint)
    .post('/create')
    .send({"name": "Joel", "salary": "10000000", "age": "20"})
    .expect(200)
    .end(function(err, res) {
        if (err) return response(err);
        return response();
      });
    
});

// And('Send a POST HTTP request', async()=>{
//     console.log('executing step now...');
// });

// Then('I receive valid Response', async()=>{
//     console.log('executing `Then` step...');
// });

// Given('I set PUT employee sevice api endpoint', async() =>{

// });

// When('I set Update request Body', async()=>{

// });

// And('Send PUT HTTP request', async()=>{
//     console.log('printing AND step definition...');
// });
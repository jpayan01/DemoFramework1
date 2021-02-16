"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require('supertest');
// import {request} from "supertest";
const cucumber_1 = require("cucumber");
let endPoint = "http://dummy.restapiexample.com/api/v1";
// let endPoint = "http://dummy.restapiexample.com/api/v1/create";
//******FOR API DEMO******\\
cucumber_1.Given('I set a POST request to employee service api endpoint', () => {
    console.log('Adding URL ' + endPoint);
});
cucumber_1.When('I send a POST HTTP request', function (response) {
    request(endPoint)
        .post('/create')
        .send({ "name": "Joel", "salary": "10000000", "age": "20" })
        .expect(200)
        .end(function (err, res) {
        if (err)
            return response(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvYXBpU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckMscUNBQXFDO0FBQ3JDLHVDQUE2QztBQUU3QyxJQUFJLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCxrRUFBa0U7QUFFbEUsNEJBQTRCO0FBQzVCLGdCQUFLLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLFVBQVMsUUFBUTtJQUNoRCxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDZixJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRztRQUNsQixJQUFJLEdBQUc7WUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRVQsQ0FBQyxDQUFDLENBQUM7QUFFSCw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDLE1BQU07QUFFTiw4Q0FBOEM7QUFDOUMsK0NBQStDO0FBQy9DLE1BQU07QUFFTiw4REFBOEQ7QUFFOUQsTUFBTTtBQUVOLCtDQUErQztBQUUvQyxNQUFNO0FBRU4sMENBQTBDO0FBQzFDLHNEQUFzRDtBQUN0RCxNQUFNIn0=
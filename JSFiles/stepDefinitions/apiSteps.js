"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
cucumber_1.Then('I receive valid Response', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('executing `Then` step...');
}));
// Given('I set PUT employee sevice api endpoint', async() =>{
// });
// When('I set Update request Body', async()=>{
// });
// And('Send PUT HTTP request', async()=>{
//     console.log('printing AND step definition...');
// });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvYXBpU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDckMscUNBQXFDO0FBQ3JDLHVDQUE2QztBQUU3QyxJQUFJLFFBQVEsR0FBRyx3Q0FBd0MsQ0FBQztBQUN4RCxrRUFBa0U7QUFFbEUsNEJBQTRCO0FBQzVCLGdCQUFLLENBQUMsdURBQXVELEVBQUUsR0FBRyxFQUFFO0lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFLFVBQVMsUUFBUTtJQUNoRCxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDZixJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxDQUFDO1NBQ3pELE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDWCxHQUFHLENBQUMsVUFBUyxHQUFHLEVBQUUsR0FBRztRQUNsQixJQUFJLEdBQUc7WUFBRSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRVQsQ0FBQyxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsMEJBQTBCLEVBQUUsR0FBTyxFQUFFO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsOERBQThEO0FBRTlELE1BQU07QUFFTiwrQ0FBK0M7QUFFL0MsTUFBTTtBQUVOLDBDQUEwQztBQUMxQyxzREFBc0Q7QUFDdEQsTUFBTSJ9
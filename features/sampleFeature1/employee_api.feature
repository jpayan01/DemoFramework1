Feature: Test CRUD methods in Sample Employee REST API testing

    Scenario: Add Employee record
        Given I set a POST request to employee service api endpoint
        When I send a POST HTTP request
        # Then I receive valid Response

#     Scenario: Update Employee Record
#         Given I set PUT employee sevice api endpoint
#         When I set Update request Body
#         And Send PUT HTTP request
#         Then I receive valid HTTP response code 200

#     Scenario: Get Employee record
#         Given I Set GET employee service api endpoint
#         When I Set request HEADER
#         And Send GET HTTP request
#         Then I receive valid HTTP respond code 200

#     Scenario: DELETE Employee record
#         Given I Set DELETE employee service api endpoint
#         When I Send DELETE HTTP request
#         Then I receive valid HTTP response code 200

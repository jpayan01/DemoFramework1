Feature: Blue Nile Demo

@UI
Scenario: Navigate to blue nile Diamond page
    Given The user navigates to Blue Nile homepage
    When The user selects "Diamonds" in "Round"
    Then The user sees the "Round Cut Diamonds" landing page

Scenario Outline: Navigate to blue nile multiple jewerly landing pages
    Given The user navigates to Blue Nile homepage
    When The user selects "<Type>" in "<Shape>"
    Then The user sees the "<Label>" landing page

Examples:
    | Type      | Shape     | Label |
    | Diamonds  | Round     | Round Cut Diamonds  |
    | Diamonds  | Princess  | Princess Cut Diamonds|
    | Diamonds  | Cushion1   | Cushion Cut Diamonds|
    
@API
Scenario: Add Employee record
    Given I set a POST request to employee service api endpoint
    When I send a POST HTTP request
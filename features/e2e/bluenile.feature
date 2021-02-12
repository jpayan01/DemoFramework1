Feature: Blue Nile Demo for BDD implemantation 

# Scenario: Navigate to blue nile Diamond page
#     Given I navigate to Blue Nile homepage
#     When I select "round" in "Diamonds"
#     Then I should see the "Diamonds" landing page

Scenario Outline: Navigate to blue nile multiple jewerly landing pages
    Given I navigate to Blue Nile homepage
    When I select "<Type>" in "<Shape>"
    Then I should see the "<Label>" landing page

Examples:
    | Type      | Shape     | Label |
    | Diamonds  | Round     | Round Cut Diamonds  |
    | Diamonds  | Princess  | Princess Cut Diamonds|
    | Diamonds  | Cushion1   | Cushion Cut Diamonds|
    
Feature: Demo BDD implemantation for Blue Nile 

Scenario: Navigate to blue nile Diamond page
    Given I navigate to Blue Nile homepage
    When I select "round" in "Diamonds"
    Then I should see the "Diamonds" landing page


    
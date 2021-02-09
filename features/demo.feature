Feature: Cucumber demo

    Scenario: Navigate to angularjs website
        Given I navigate to calculator angularjs website
        When I enter "3" and "5"
        Then The total should be "8"

    Scenario Outline: Data parametrization demo
        Given Given I navigate to calculator angularjs website
        When I enter "<sum1>" and "<sum2>"
        Then The total should be "<answer>"

        Examples:
            | sum1 | sum2 | answer |
            | 3    | 5    | 8      |
            | 2    | 3    | 5      |


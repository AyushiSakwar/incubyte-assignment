Feature: Parabank User Registration

  Scenario: Successful account creation
    Given I open the Parabank website
    When I navigate to the Registration page
    And I register a new user with valid details
    Then I should see a success message

  Scenario: Registration with empty mandatory fields
    Given I open the Parabank website
    When I navigate to the Registration page
    And I try to register without filling any fields
    Then I should see error messages for required fields

  Scenario: Registration with mismatched passwords
    Given I open the Parabank website
    When I navigate to the Registration page
    And I enter mismatched password and confirmation
    Then I should see an error for password mismatch
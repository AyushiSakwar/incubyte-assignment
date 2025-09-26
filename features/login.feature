Feature: Parabank User Login

  Scenario: Successful login
    Given I open the Parabank website
    When I login with valid credentials
    Then I should be redirected to the account overview page
    And I should see my account balance

  Scenario: Login with empty fields
    Given I open the Parabank website
    When I try to login with empty username and password
    Then I should see error messages for required fields

  Scenario: Login with invalid credentials
    Given I open the Parabank website
    When I try to login with invalid username and password
    Then I should see an error message
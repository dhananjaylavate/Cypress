Feature: Login Functionality

  Scenario Outline: Users logs in successfully
    Given I visit the login page
    When I enter valid username "<username>" and password "<password>" credentials
    And I click the login button
    #Then I should be redirected to the dashboard

    Examples:
        | username  | password |
        #| Snehal    | asdfgh   |
        | Dhananjay | abcd     |
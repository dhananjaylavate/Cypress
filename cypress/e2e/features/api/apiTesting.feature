Feature: API Testing

    API Testing Feature

    Scenario: Validate GET request for user details 
    
    Given I send a GET request to users endpoint
    Then the response status code should be 200



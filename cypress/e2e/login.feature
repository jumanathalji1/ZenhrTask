Feature: Login Feature
    
    Through this feature user should be able to login

    Scenario: Log in user
        Given Visit ZenHR website
        When User provide email
        When User provide password
        Then Click on Login button to log in into ZenHR website
        And Assert login

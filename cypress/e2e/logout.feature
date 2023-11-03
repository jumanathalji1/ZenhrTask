Feature: Logout Feature
    
    Through this feature user should be able to logout

    Background: Log in user
        Given Visit ZenHR website
        When User provide email
        When User provide password
        Then Click on Login button to log in into ZenHR website
        And Assert login

    
    Scenario: Test logout
        Given Visit ZenHR website
        Then Click on right side menu
        Then Click on logout
        Then Assert logout
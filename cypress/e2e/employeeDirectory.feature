Feature: Side Menu Feature
    
    Through this feature user should be able to navigate through side menu elements

    Background: Log in user
        Given Visit ZenHR website
        When User provide email
        When User provide password
        Then Click on Login button to log in into ZenHR website
        And Assert login
       
       
    Scenario: Test employee directory
        Given Visit ZenHR website
        Then Click on left menu
        Then Click on employees menu
        Then Click on employee directory
        Then Click on B button
        And Assert more than two cards visible
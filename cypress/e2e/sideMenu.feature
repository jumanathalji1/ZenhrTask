Feature: Side Menu Feature
    
    Through this feature user should be able to navigate through side menu elements

    Background: Log in user
        Given Visit ZenHR website
        When User provide email
        When User provide password
        Then Click on Login button to log in into ZenHR website
        And Assert login


    Scenario: Check all side menu pages found
        Given Visit ZenHR website
        Then assert404

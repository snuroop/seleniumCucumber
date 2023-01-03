@ignore
Feature:sample login application using parameterization

Scenario: Login test with params
Given user is in login page
When type "Admin" and "admin123"
And click login btn
Then user should be in home page



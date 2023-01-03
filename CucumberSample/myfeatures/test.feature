
Feature:sample login application using parameterization
#@ignore
@smoke
Scenario: Login test with params
Given user is in login page
When type "Admin" and "admin123"
And click login btn
Then user should be in home page
@smoke
Scenario: Search cucumber in google
Given user open google home
When user serach for searchString
And click on search
Then result should show related to my search key




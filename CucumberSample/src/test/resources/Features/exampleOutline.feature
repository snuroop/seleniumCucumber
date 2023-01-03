Feature: Title of your feature

  Scenario Outline: Title of your scenario outline
    Given user is in login page
    When Enter the Username <username> and Password <password>
    And click login btn
    Then user should be in home page

    Examples: 
      | username | password    |
      | Admin    | admin123    |
      | Admin2   | admin123456 |

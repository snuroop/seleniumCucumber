$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/exampleOutline.feature");
formatter.feature({
  "name": "Title of your feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter the Username \u003cusername\u003e and Password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click login btn",
  "keyword": "And "
});
formatter.step({
  "name": "user should be in home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin2",
        "admin123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username Admin and Password admin123",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Login.enter_the_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login btn",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Login.click_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Login.user_should_be_in_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Title of your scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinitions.Login.user_is_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Username Admin2 and Password admin123456",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Login.enter_the_Username_and_Password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click login btn",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinitions.Login.click_login_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be in home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinitions.Login.user_should_be_in_home_page()"
});
formatter.result({
  "status": "passed"
});
});
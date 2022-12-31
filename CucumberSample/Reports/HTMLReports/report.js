$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/test.feature");
formatter.feature({
  "name": "",
  "description": "sample login application test",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login test",
  "description": "",
  "keyword": "Scenario"
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
  "name": "enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Login.enter_email_and_password()"
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
  "name": "Login test1",
  "description": "",
  "keyword": "Scenario"
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
  "name": "enter email and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinitions.Login.enter_email_and_password()"
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
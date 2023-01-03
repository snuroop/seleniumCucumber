package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/Features",
//		features="myfeatures", 
		glue = { "com.stepDefinitions" }, monochrome = true, dryRun = false, strict = true, plugin = {
				"html:Reports\\HTMLReports", "json:Reports\\JSONReports\\cucumber.json",
				"junit:Reports\\JUnitReports\\Cucumber.xml" }, tags = "not @ignore")

public class Runner {

}

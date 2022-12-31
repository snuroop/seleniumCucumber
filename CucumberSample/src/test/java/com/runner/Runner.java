package com.runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/resources/Features", 
		glue= {"com.stepDefinitions"},
		monochrome = true,
		plugin = {"html:Reports\\HTMLReports","json:Reports\\JSONReports\\cucumber.json","junit:Reports\\JUnitReports\\Cucumber.xml"})

public class Runner {

}

package com.stepDefinitions;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Login {
	
	WebDriver driver;
	@Given("user is in login page")
	public void user_is_in_login_page() {
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
	    driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(2));
	}

	@When("^Enter the Username (.*) and Password (.*)$")
	public void enter_the_Username_and_Password(String username,String password) {
	   driver.findElement(By.xpath("//input[@name=\"username\"]")).sendKeys(username); 
	   driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys(password);
	}
	@When("type {string} and {string}")
	public void type_and(String email, String password) {
		 driver.findElement(By.xpath("//input[@name=\"username\"]")).sendKeys(email); 
		   driver.findElement(By.xpath("//input[@name=\"password\"]")).sendKeys(password);
	}

	@And("click login btn")
	public void click_login_btn() {
	   driver.findElement(By.cssSelector("button")).click();
	}

	@Then("user should be in home page")
	public void user_should_be_in_home_page() {
	  System.out.println( driver.getCurrentUrl());
	  driver.close();
	}
}

package com.stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Search {

	WebDriver driver;

	@Given("user open google home")
	public void user_open_google_home() throws InterruptedException {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.google.com/");
		Thread.sleep(2000);
	}

	@When("user serach for searchString")
	public void user_serach_for_searchString() {
	   driver.findElement(By.cssSelector("input[name='q']")).sendKeys("cucumber javascript");
	   
	}

	@And("click on search")
	public void click_on_search() {
		driver.findElement(By.cssSelector("input[name='q']")).sendKeys(Keys.RETURN);
	}

	@Then("result should show related to my search key")
	public void result_should_show_related_to_my_search_key() {
	    System.out.println("restult shown");
	    driver.close();
	}
}

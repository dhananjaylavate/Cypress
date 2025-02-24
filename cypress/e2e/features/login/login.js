import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LOGIN_PAGE_ELEMENT } from "cypress/e2e/elements/login";

Given("I visit the login page", () => {
    cy.visit("https://parabank.parasoft.com/parabank");
  });

  When("I enter valid username {string} and password {string} credentials", (username,password) => {
    cy.login(username, password);
  });
  
  When("I click the login button", () => {
    cy.clickButton(LOGIN_PAGE_ELEMENT.loginButton)
  });
  
  Then("I should be redirected to the dashboard", () => {
    cy.url().should("include", "/overview.htm");
  });
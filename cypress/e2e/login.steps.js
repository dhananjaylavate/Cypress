// cypress/e2e/login.steps.js
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the login page", () => {
  cy.visit("/login");
});

When("I enter valid credentials", () => {
  cy.get("#username").type("testuser");
  cy.get("#password").type("password123");
  cy.get("#login-button").click();
});

Then("I should be redirected to the dashboard", () => {
  cy.url().should("include", "/dashboard");
});
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { REGISTRATION_PAGE_ELEMENT } from "cypress/e2e/elements/registration";

Given('I visit the Registration page', function (){
    cy.visit('https://parabank.parasoft.com/parabank');
});

When("User enter Registration details", function (){
    
    cy.clickButton(REGISTRATION_PAGE_ELEMENT.registrationLink)

    cy.getElement(REGISTRATION_PAGE_ELEMENT.firstName).type('Dhananjay');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.lastName).type('Lavate');

    cy.getElement(REGISTRATION_PAGE_ELEMENT.address).type('Solapur');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.city).type('solapur');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.state).type('Maharashtra');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.zipCode).type('413216');
    
    cy.getElement(REGISTRATION_PAGE_ELEMENT.phoneNumber).type('1234567890');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.ssn).type('abcd');


    cy.getElement(REGISTRATION_PAGE_ELEMENT.userName).type('Dhananjay');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.passWord).type('abcd');
    cy.getElement(REGISTRATION_PAGE_ELEMENT.confirmPassword).type('abcd');
    
});

Then("I click the Registration button", function(){
    cy.clickButton(REGISTRATION_PAGE_ELEMENT.registorBtn)
    cy.getElement(REGISTRATION_PAGE_ELEMENT.duplicateUSerMsg).contains('This username already exists')
     
});
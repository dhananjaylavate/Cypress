import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I send a GET request to users endpoint", ()=>{
    cy.api("GET", "https://reqres.in/api/users?page=2").then((response) => {
        expect(response.status).to.eq(200);
        cy.wrap(response).as("getUsersResponse");
    });
})

Then("the response status code should be 200", ()=>{
    cy.get("@getUsersResponse").its("status").should("eq", 200);
})
describe('Register new user',()=>{

    it('new user details',()=>{
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.get("a[href='register.htm']").click()
    cy.get("input[id='customer.firstName']").type('Snehal') //firstname
    cy.get("input[id='customer.lastName']").type('lavate') //lastname
    cy.get("input[id='customer.address.street']").type('Solapur') //address
    cy.get("input[id='customer.address.city']").type('pune')//city
    cy.get("input[id='customer.address.state']").type('Maharash')//state
    cy.get("input[id='customer.address.zipCode']").type('456789')//zipcode
    cy.get("input[id='customer.phoneNumber']").type('Solapur')//phone
    cy.get("input[id='customer.ssn']").type('abd')//ssn
    cy.get("input[id='customer.username']").type('Snehal')//username
    cy.get("input[id='customer.password']").type('asdfgh')//password
    cy.get("input[id='repeatedPassword']").type('asdfgh')
    cy.get('[colspan="2"] >.button').click()
    cy.get("span[id='customer.username.errors']").contains('This username already exists')
     



    })



})
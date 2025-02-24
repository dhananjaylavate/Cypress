const REGISTRATION = {
    registrationLink: "a[href='register.htm']",
    firstName: "input[id='customer.firstName']",
    lastName: "input[id='customer.lastName']",
    address:"input[id='customer.address.street']",
    city:"input[id='customer.address.city']",
    state:"input[id='customer.address.state']",
    zipCode:"input[id='customer.address.zipCode']",
    phoneNumber:"input[id='customer.phoneNumber']",
    ssn:"input[id='customer.ssn']",
    userName:"input[id='customer.username']",
    passWord:"input[id='customer.password']",
    confirmPassword:"input[id='repeatedPassword']",
    registorBtn:'[colspan="2"] >.button',
    duplicateUSerMsg:"span[id='customer.username.errors']"
};

export const REGISTRATION_PAGE_ELEMENT = REGISTRATION;
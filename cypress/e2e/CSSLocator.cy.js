
describe('CSSLocator',()=>{
    it('csslocator',()=>{
        cy.visit("https://www.freshworks.com/")
        cy.viewport(1024,768)
        cy.contains('Accept all').click
        cy.contains('Platform').click
    })
})


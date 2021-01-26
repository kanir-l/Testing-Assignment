describe("Presentation", () => {

    it("Presentation and back to Start", () => {
        
        cy.visit("/presentation.html")
        cy.get('a[href*="start"]').click()
        cy.url().should("include", "start").end()

    })

}) 
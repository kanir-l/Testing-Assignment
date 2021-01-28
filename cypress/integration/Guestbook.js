describe("Guestbook", () => {

    it("Guestbook Fill in Message", () => {

        // Blank textarea
        cy.visit("/guestbook.html") 
        cy.get("form")
        cy.get("textarea").invoke("val", "")
        cy.get("form").submit()
        cy.contains("kort")

        // Too short message
        cy.get("form")
        cy.get("textarea").type("he")
        cy.get("form").submit()
        cy.contains("kort")

        // Successful message
        cy.get("form")
        cy.get("textarea").clear().type("hej")
        cy.get("form").submit()
        cy.contains("Ta bort")

        // Remove succesful message
        cy.get("a").contains("Ta bort").click()
        cy.get("form")

        // Back to Start page
        cy.get('a[href*="start"]').click()
        cy.url().should("include", "start").end()

    })

})
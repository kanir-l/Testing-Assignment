describe("Start redirectory", () => {

    it ("Go to Guestbook", () => {

        cy.visit("/start.html")
        cy.get('a[href*="guestbook"]').click()
        cy.url().should("include", "guestbook")
        cy.get('a[href*="start"]').click()
        cy.url().should("include", "start").end()

    })

    it ("Go to Presentation", () => {
        
        cy.visit("/start.html")
        cy.get('a[href*="presentation"]').click()
        cy.url().should("include", "presentation")
        cy.get('a[href*="start"]').click()
        cy.url().should("include", "start").end()

    })

    it ("Log Out", () => {
        
        cy.visit("/start.html")
        cy.get('a[href*="/"]').click()
        cy.url().should("include", "/Frontend").end()

    })

})
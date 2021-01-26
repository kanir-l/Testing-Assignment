describe("Login form", () => {

    //Able to log in
    it("Can Log in", () => {

        cy.visit('/') // Go to the url localhost

        cy.get('form') // Get the tag <form>

        cy.get('input[name="username"]').type("CoolUser").should('have.value', "CoolUser") // get the username name and check with the right username

        cy.get('input[name="password"]').type("123123123").should('have.value', "123123123") // get the password name and check with the right password

        cy.get('form').submit() // Submit the form to the next page

        cy.url().should('include', 'start').end()
    
    })

    //Unable to log in
    it("Cannot Log in, with the right username, but wrong password", () => {

        cy.visit('/') // Go to the url localhost

        cy.get('form') // Get the tag <form>

        cy.get('input[name="username"]').type("CoolUser") // get the username name and check with the right username

        cy.get('input[name="password"]').type("abcabcabc") // get the password name and check with the wrong password

        cy.get('form').submit() // Submit the form to the next page

        cy.contains("Fel").end()

    })

    //Unable to log in
    it("Cannot Log in, with the wrong username, but right password", () => {

        cy.visit('/') // Go to the url localhost

        cy.get('form') // Get the tag <form>

        cy.get('input[name="username"]').type("WarmUser") // get the username name and check with the right username

        cy.get('input[name="password"]').type("123123123") // get the password name and check with the wrong password

        cy.get('form').submit() // Submit the form to the next page

        cy.contains("Fel").end()

    })
    
})
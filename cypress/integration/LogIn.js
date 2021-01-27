describe("Login form", () => {

    it("Sucessfully log in", () => {

        cy.visit('/') 
        cy.contains("Användarnamn")
        cy.get('form') 
        cy.get('input[name="username"]').type("CoolUser").should('have.value', "CoolUser") 
        cy.get('input[name="password"]').type("123123123").should('have.value', "123123123") 
        cy.get('form').submit() 
        cy.url().should('include', 'start').end()
        cy.contains("Välkommen")
    
    })

    it("Fail to log in - wrong username, correct password", () => {

        cy.visit('/')
        cy.contains("Användarnamn")
        cy.get('form')
        cy.get('input[name="username"]').type("WarmUser") 
        cy.get('input[name="password"]').type("123123123") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - wrong password, correct username", () => {

        cy.visit('/') 
        cy.contains("Användarnamn")
        cy.get('form') 
        cy.get('input[name="username"]').type("CoolUser") 
        cy.get('input[name="password"]').type("abcabcabc") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - empty username, with correct password", () => {

        cy.visit('/')
        cy.contains("Användarnamn")
        cy.get('form')
        cy.get('input[name="username"]').type(" ") 
        cy.get('input[name="password"]').type("123123123") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - empty password, with correct username", () => {

        cy.visit('/')
        cy.contains("Användarnamn")
        cy.get('form')
        cy.get('input[name="username"]').type("CoolUser") 
        cy.get('input[name="password"]').type(" ") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Click register", () => {

        cy.visit('/')
        cy.contains("Användarnamn")
        cy.get('a[href*="register"]').click()
        cy.url().should('include', 'register').end()
        cy.contains("Registrera")
    })

})
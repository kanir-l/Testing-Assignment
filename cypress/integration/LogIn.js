describe("Login form", () => {

    it("Sucessfully log in", () => {

        cy.visit('/') 
        cy.get('form') 
        cy.get('input[name="username"]').type("CoolUser").should('have.value', "CoolUser") 
        cy.get('input[name="password"]').type("123123123").should('have.value', "123123123") 
        cy.get('form').submit() 
        cy.url().should('include', 'start').end()
    
    })

    it("Fail to log in - wrong username", () => {

        cy.visit('/')
        cy.get('form')
        cy.get('input[name="username"]').type("WarmUser") 
        cy.get('input[name="password"]').type("123123123") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - wrong password", () => {

        cy.visit('/') 
        cy.get('form') 
        cy.get('input[name="username"]').type("CoolUser") 
        cy.get('input[name="password"]').type("abcabcabc") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - empty username", () => {

        cy.visit('/')
        cy.get('form')
        cy.get('input[name="username"]').type(" ") 
        cy.get('input[name="password"]').type("123123123") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

    it("Fail to log in - empty password", () => {

        cy.visit('/')
        cy.get('form')
        cy.get('input[name="username"]').type("CoolUser") 
        cy.get('input[name="password"]').type(" ") 
        cy.get('form').submit()
        cy.contains("Fel").end()

    })

})
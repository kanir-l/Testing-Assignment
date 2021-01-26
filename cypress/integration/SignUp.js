describe("Registration form", () => {

    it("Registration successful", () => {

        cy.visit("/");
        cy.get("a").click();
        
        cy.contains("Registrera!");
        cy.get("form");
        cy.get('input[name="username"]').type("UncoolUser");
        cy.get('input[name="email"]').type("mail@mail.com");
        cy.get('input[name="password"]').type("asd");
        cy.get('input[name="passwordConfirm"]').type("asd");

        cy.get("form").submit();
        
        //cy.get('input[name="username"]').type("CoolUser").should("CoolUser");
    })

    it("Registration fail - invalid username", () => {
        cy.visit("/");
        cy.get("a").click();
        
        cy.contains("Registrera!");
        cy.get('input[name="username"]').type(" ");
        cy.get("form").submit();
    })

    it("Registration fail - invalid email", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser");
        cy.get('input[name="email"]').type("mail@");
        cy.get("form").submit();
    })

    it("Registration fail - non-matching password", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser");
        cy.get('input[name="email"]').type("mail@mail.com");
        cy.get('input[name="password"]').type("asd");
        cy.get('input[name="passwordConfirm"]').type("asdf");
        cy.get("form").submit();

    })

})
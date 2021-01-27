describe("Registration form", () => {

    it("Registration successful", () => {
        cy.visit("/");
        cy.get("a").click();
        
        cy.contains("Registrera!");
        cy.get("form");
        cy.get('input[name="username"]').type("UncoolUser").should("have.value", "UncoolUser");
        cy.get('input[name="email"]').type("mail@mail.com").should("have.value", "mail@mail.com");
        cy.get('input[name="password"]').type("asd").should("have.value", "asd");
        cy.get('input[name="passwordConfirm"]').type("asd").should("have.value", "asd");

        cy.get("form").submit().end();
    })

    it("Registration fail - invalid username with other fields empty", () => {
        cy.visit("/");
        cy.get("a").click();
        
        cy.contains("Registrera!");
        cy.get('input[name="username"]').type(" ").should("have.value", " ");
        cy.get("form").submit().end();
    })

    it("Registration fail - invalid username with other fields filled", () => {
        cy.visit("/");
        cy.get("a").click();
        
        cy.contains("Registrera!");
        cy.get('input[name="username"]').type(" ").should("have.value", " ");
        cy.get('input[name="email"]').type("mail@mail.com").should("have.value", "mail@mail.com");
        cy.get('input[name="password"]').type("asd").should("have.value", "asd");
        cy.get('input[name="passwordConfirm"]').type("asd").should("have.value", "asd");
        cy.get("form").submit().end();
    })

    it("Registration fail - invalid email with other fields empty", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser").should("have.value", "UncoolUser");
        cy.get('input[name="email"]').type("mail@").should("have.value", "mail@");
        cy.get("form").submit().end();
    })

    it("Registration fail - invalid email with other fields filled", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser").should("have.value", "UncoolUser");
        cy.get('input[name="email"]').type("mail@").should("have.value", "mail@");
        cy.get('input[name="password"]').type("asd").should("have.value", "asd");
        cy.get('input[name="passwordConfirm"]').type("asd").should("have.value", "asd");
        cy.get("form").submit().end();
    })

    it("Registration fail - non-matching password", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser").should("have.value", "UncoolUser");
        cy.get('input[name="email"]').type("mail@mail.com").should("have.value", "mail@mail.com");
        cy.get('input[name="password"]').type("asd").should("have.value", "asd");
        cy.get('input[name="passwordConfirm"]').type("asdf").should("have.value", "asdf");
        cy.get("form").submit().end();

    })

    it("Registration fail - non-matching password II", () => {
        cy.visit("/");
        cy.get("a").click();

        cy.contains("Registrera!");
        cy.get('input[name="username"]').type("UncoolUser").should("have.value", "UncoolUser");
        cy.get('input[name="email"]').type("mail@mail.com").should("have.value", "mail@mail.com");
        cy.get('input[name="password"]').type("asdf").should("have.value", "asdf");
        cy.get('input[name="passwordConfirm"]').type("asd").should("have.value", "asd");
        cy.get("form").submit().end();

    })

})
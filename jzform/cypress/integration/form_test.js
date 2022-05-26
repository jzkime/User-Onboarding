describe("jzform", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    const inputFirst = () => cy.get("input[name=first_name]");
    const inputLast = () => cy.get("input[name=last_name]");
    const inputPassword = () => cy.get("input[name=password]");
    const inputEmail = () => cy.get("input[name=email]");
    const checkTerms = () => cy.get("input[name=terms]");
    const submitBtn = () => cy.get("input[name=submit]");

    it("sanity check", () => {
        expect(1 + 1).to.equal(2);
        expect(2 + 3).to.not.equal(7);
        expect({}).to.not.equal({});
        expect({}).to.eql({});
    })

    it("inputs and submit showing",() => {
        inputFirst().should("exist");
        inputLast().should("exist");
        inputPassword().should("exist");
        inputEmail().should("exist");
        checkTerms().should("exist");
        submitBtn().should("exist");

        cy.contains(/lorem ipsum/i).should("exist");
    })

    it("can successfully visit site", () => {
        cy.url().should("include", "localhost");
    })

    describe("Filling out Form and Submit", () => {
        it("submit is disabled on default", () => {
            submitBtn().should("be.disabled");
        })

        it("can type into all inputs", () => {
            inputFirst().should("have.value", "").type("Gen").should("have.value", "Gen");
            inputLast().should("have.value", "").type("Eric").should("have.value", "Eric");
            inputPassword().should("have.value", "").type("password").should("have.value", "password");
            inputEmail().should("have.value", "").type("genEric@email.com").should("have.value", "genEric@email.com");
            checkTerms().click().should("be.checked");
        })

        it("ERROR check: first name must not be less than 3 characters", () => {
            inputFirst().type("na");
            cy.contains("First name needs to be minimum of 3 characters");
        })

        it("ERROR check: last name must be less than 3 characters", () => {
            inputLast().type("ba");
            cy.contains("*Last name needs to be minimum 3 characters");
        })

        it("ERROR check: password needs to be over 8 characters", () => {
            inputPassword().type("1234567");
            cy.contains("Minimum 8 characters");
        })

        it("submit button is enabled when inputs are entered", () => {
            inputFirst().should("have.value", "").type("Mike").should("have.value", "Mike");
            inputLast().should("have.value", "").type("Hat").should("have.value", "Hat");
            inputPassword().should("have.value", "").type("password2").should("have.value", "password2");
            inputEmail().should("have.value", "").type("mikehat@email.com").should("have.value", "mikehat@email.com");
            checkTerms().click().should("be.checked")

            submitBtn().should("not.be.disabled");
        })

    })// end of describe "fill out check"

    describe("Submits form and card shows up", () => {
        it("card containing input material shows up on submit", () => {
            inputFirst().type("Light");
            inputLast().type("Yagami");
            inputPassword().type("potatochip");
            inputEmail().type("notkira@email.com");
            checkTerms().check();

            submitBtn().click();

            cy.contains("Light");
            cy.contains("Yagami");
            cy.contains("notkira@email.com");
        })// end of input and submit

    })// end of describe "submit and card"

    describe("can not use the same email more than once", () => {
        it("ERROR check: cannot submit two forms with the same email", () => {
            inputFirst().type("Eren");
            inputLast().type("Yeager");
            inputPassword().type("titanslayer");
            inputEmail().type("socool@email.com");
            checkTerms().check();

            submitBtn().click();
            cy.contains("Eren");

            inputFirst().type("Jean");
            inputLast().type("Kirstein");
            inputPassword().type("imthebest");
            inputEmail().type("socool@email.com");
            checkTerms().check();
            submitBtn().click();

            cy.contains("This email is already in use");
            cy.contains("Jean").should("not.exist");
        })
    }) // end of describe use same email once

})
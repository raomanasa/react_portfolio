// cypress/integration/visitor_can_see_landing_page.spec.js
    describe("Visitor can see landing page", () => {
        it("visitor can see content when loading the app", () => {
            cy.visit("/");
            cy.get("nav")
                .should("contain", "My Portfolio")
                .and("contain", "About Me")
                .and("contain", "Projects");
            cy.get(".main.container")
                .should("contain", "Hello World")
                .and("contain","I am studying to become a fullstack junior web developer");
        });
    });

    describe("Visitor can navigate page", () => {
        it("visitor can navigate using the header", () => {
            cy.visit("/");
            cy.get("nav").within(() => {
            cy.contains("Projects").click();
            cy.url().should("contain", "projects");
            cy.contains("About").click();
            cy.url().should("contain", "about");
            cy.contains("My Portfolio").click();
            cy.url()
                .should("not.contain", "projects")
                .and("not.contain", "about");
        });
    });
});
describe("Delete functionality", () => {
  before(() => {
    cy.visit(`http://localhost:3000/logs/new`);
  });
  it("can create a log", () => {
    cy.get("#captainName").type("Captain Beefheart");
    cy.get("#title").type("Alice in Blunderland");
    cy.get("form > textarea").type("Ice cream for crows");
    cy.get("#mistakesWereMadeToday").check();
    cy.get("form").submit();
  });
  it("can go to the show page of the created log", () => {
    cy.get("a").last().click();
  });
  it("can delete the created log", () => {
    cy.get("button").contains("Delete").click();
    cy.visit("/logs");
    cy.get("td").should("not.contain", "Captain Beefheart");
  });
});

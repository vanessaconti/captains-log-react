const URL = "http://localhost:3000";

describe("Index page", () => {
  before(() => {
    cy.visit(`${URL}/logs`);
  });

  it("Has a link to each log's show page", () => {
    const regex = /logs\/(\d+)/;
    const test = cy.get(".Log a");
    cy.get(".Log a").each(($item) => {
      cy.wrap($item).invoke("attr", "href").should("match", regex);
    });
  });

  it("Can load index page and has navigation to New page", () => {
    cy.get("a").contains("New Log").should("have.attr", "href", `/logs/new`);
  });

  it("Can navigate to New page", () => {
    cy.get("a").contains("New Log").click();
    cy.url().should("eq", `${URL}/logs/new`);
  });
});

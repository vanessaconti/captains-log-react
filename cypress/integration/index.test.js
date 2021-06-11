describe("feature one", () => {
  it("shows the header text", () => {
    cy.visit("http://localhost:3000/logs");
    cy.contains("Captain's Log");
    cy.contains("Index");
  });

  it("can navigate to New page", () => {
    cy.get("a").contains("New Log").click();
    cy.url().should("eq", "http://localhost:3000/logs/new");
  });

  it("has list of log titles", () => {
    // the list of logs we're testing against are the ones provided
    // in the captains-log-api-solution:
    // https://github.com/joinpursuit/captains-log-api-solution
    // the server for the above repo needs to be running on port 9000
    // if you don't have it yet, clone into it and do the following
    // create .evn file and add PORT=9000 in there.
    // run on CLI: npm i && npm start
  
    cy.visit("http://localhost:3000/logs");
    cy.contains("Courage");
    cy.contains("Whale");
    cy.contains("Vandal Savage");
    cy.contains("Insolence");
    cy.contains("Ava");
    cy.contains("What is sleep?");
    cy.contains("Jonah Hex");
  });

  it("has a link to each log's show page", () => {
    // each log's title is a link to the show page for that log
    cy.get("a").contains("Courage").click();
    cy.url().should("eq", "http://localhost:3000/logs/0");
  });
});

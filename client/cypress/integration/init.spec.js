describe("Cypress", () => {
  it("is working", () => {
    // eslint-disable-next-line jest/valid-expect
    expect(true).to.equal(true);
  });

  it("visits the app", () => {
    cy.visit("/");
    cy.log("Da kjører vi");
  });
});

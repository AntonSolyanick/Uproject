describe("Пользователь заходит на страницу со списком статей", () => {
  beforeEach(() => {
    cy.login().then((data) => {
      cy.visit("articles");
    });
  });

  it("И страница загружается", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
  it.skip("И страница загружается", () => {
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });

  it("И страница загружается (на стабах/фикстурах)", () => {
    cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
    cy.getByTestId("ArticleList").should("exist");
    cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3);
  });
});

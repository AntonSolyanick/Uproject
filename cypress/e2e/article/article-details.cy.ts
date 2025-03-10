let currentArticleId = "";

describe("Пользователь заходит на страницу статьи", () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.visit(`articles/${currentArticleId}`);
    });
  });

  afterEach(() => {
    cy.removeArticle(currentArticleId);
  });
  it("И видит содержимое статьи", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
  });
  it("И видит список рекомендаций", () => {
    cy.getByTestId("ArticleRecommendationsList").should("exist");
  });
  it("И оставляет коментарий", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
    cy.getByTestId("AddCommentForm").scrollIntoView();
    cy.addComment("text");
    cy.getByTestId("CommentCard.Content").should("have.length", 1);
  });

  it("И ставит оценку", () => {
    cy.getByTestId("ArticleDetails.Info").should("exist");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });

  it("И ставит оценку (на стабах/фикстурах)", () => {
    cy.intercept("GET", "**/article-details*", {
      fixture: "article-details.json",
    });
    cy.getByTestId("ArticleDetails.Info").should("exist");
    cy.getByTestId("RatingCard").scrollIntoView();
    cy.setRate(4, "feedback");
    cy.get("[data-selected=true]").should("have.length", 4);
  });
});

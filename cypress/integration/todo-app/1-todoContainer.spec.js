describe('Todo uygulaması başarılı bir şekilde çalışıyor.', () => {
  beforeEach(() => cy.visit('/'));

  it('Başarılı bir şekilde açılıp, boş liste ile gelmeli.', () => {
    cy.get('[data-cy=todo-header]').contains('Yapılacak Listesi');
    cy.get('[data-cy=empty-message]').should('exist');
    cy.get('[data-cy=add-todo-section]').should('exist');
    cy.get('[data-cy=todo-container]').should('not.exist');
  });

  it('Listeye yeni bir eleman ekleyince görünmeli ve yeniden başlatınca o eleman listede görünmeli', () => {
    cy.get('[data-cy=empty-message]').should('exist');
    cy.addTodo('Yeni todo');
    cy.get('[data-cy=empty-message]').should('not.exist');
    cy.get('[data-cy=todo-container]').should('exist');
    cy.reload();
    cy.get('[data-cy=empty-message]').should('not.exist');
    cy.get('[data-cy=todo-container]').should('exist');
    cy.get('[data-cy=todo-container]').children().should('have.length', 1);
  });
});

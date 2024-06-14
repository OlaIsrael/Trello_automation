it('Creat a new List and a New card', () => {
    cy.visit('/board/1')
    cy.get('[data-cy="add-list-input"]').clear('I');
    cy.get('[data-cy="add-list-input"]').type('Issues');
    cy.get('.grid > div > .py-1').click();
    cy.get('[data-cy="new-card"] > .h-5').click();
    cy.get('[data-cy="new-card-input"]')
        .type('login in status code not retuned {enter}')
    cy.get('.grid > div > .py-1').click();

   
    cy.get('[data-cy="card-text"]')
    .should('contain.text', 'login in status code not retuned')
    


}),

it.only ('Stating a board', () => {
    cy.visit('/') 
    cy.get('[data-cy="star"]')
    .first()
    .click({force: true}) 

    cy.get('[data-cy="starred-boards"]')
    .should('have.text', ' Starred ')
    


});


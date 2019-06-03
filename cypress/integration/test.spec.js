describe('Title', () => {

    beforeEach(() => {
        cy.visit('http://localhost:4200')
      })
    

    it('Should display h1 title', () => {
        cy.get('h1').should("contain", "Tour of Heroes");
    });

    it('Bomba search should return bombasto', () => {
        cy.get('#search-box').type("Bomba");
        cy.get('.search-result').should("contain", "Bombasto");
    })
});
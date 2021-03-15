class verificarCuotas{
    filtrarCuotas = (banco,tarjeta,cuotas)=>{
        cy.fixture('cuotas.json').then((cuota)=>{
          cy.get(cuota.phoneList).eq(2).click();
          cy.get(cuota.options).click();
          cy.get(cuota.selectBank).select(banco);
          cy.get(cuota.selectCard).select(tarjeta);
          cy.get(cuota.table).each((cell)=>{
            cy.wrap(cell).should('not.have.text',cuotas)
            });
        });
    };
};

export default new verificarCuotas();
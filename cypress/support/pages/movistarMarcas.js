class Marcas {
    
    filtrarMarcas = (dato)=>{
        cy.fixture('marcas.json').then((marca)=>{
            if(dato=='LG'){
                cy.get(marca.lg).click();
                cy.get(marca.etiquetas).each((uno)=>{
                    cy.wrap(uno).should('have.text',dato);
                })
            }
            if(dato=='Motorola'){
                cy.get(marca.motorola).click();
                cy.get('.product-brand > a').each((marca)=>{
                    cy.wrap(marca).should('have.text',dato);
                })
            }
            if(dato=='Nokia'){
                cy.get(marca.nokia).click();
                cy.get('.product-brand > a').each((marca)=>{
                    cy.wrap(marca).should('have.text',dato);
                })
            }
            if(dato=='Samsung'){
                cy.get(marca.samsung).click();
                cy.get('.product-brand > a').each((marca)=>{
                    cy.wrap(marca).should('have.text',dato);
                })
            }
            if(dato=='Alcatel'){
                cy.get(marca.alcatel).click();
                cy.get('.product-brand > a').each((marca)=>{
                    cy.wrap(marca).should('have.text',dato);
                })
            }
            if(dato=='Apple'){
                cy.get(marca.Apple).click();
                cy.get('.product-brand > a').each((marca)=>{
                    cy.wrap(marca).should('have.text',dato);
                })
            }
        })
    }

}

export default new Marcas
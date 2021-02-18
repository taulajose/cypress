describe("tests Movstar", function(){

    beforeEach(function(){
        cy.visit("https://tienda.movistar.com.ar");
    });

    it('verificar existencia de 18 cuotas',function(){
        cy.get(':nth-child(8) > .product-info > .product-name > a').click();
        let samsungA31 = cy.get('.product-name.desktop > .h1');
        samsungA31.contains('A31');
        let divMetodosDePago = cy.get('.movistar-buy-method-button');
        divMetodosDePago.should('be.visible').contains('18');
    });

    it('filtrar celulares',function(){
        let filtro = cy.get('li > .btn-group > .btn-filter > [data-label-placement=""] > .icon');
        filtro.click();
        let gamaAlta = cy.get(':nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label');
        gamaAlta.click();
        cy.get('li > .btn-group > .btn-filter > [data-label-placement=""] > .icon').click();
        let memoria256 = cy.get(':nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label');
        memoria256.click();
        let containerCelulares = cy.get('.item.last');
        let arrayCelulares = Object.entries(containerCelulares);
        cy.log("Elementos encontrados", arrayCelulares.length);    
    });

});





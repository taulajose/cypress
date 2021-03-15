import movistarCart from '../../support/pages/movistarCart'
import movistarMarcas from '../../support/pages/movistarMarcas'
import movistarCuotas from '../../support/pages/movistarCuotas'
import movistarNav from '../../support/pages/movistarNav';

describe("tests Movistar", function(){

    beforeEach(function(){
        cy.visit("https://tienda.movistar.com.ar");
    });

    it('CP001-Validar cuotas en compra de equipo -Cuotas.18 -Equipo.A31',function(){
        cy.get('.waves-effect > .icon-search').click().click();
        cy.get('#myInput').click().type('A31').type('{enter}');
        cy.get('.movistar-product-image-clickable').click();
        let divMetodosDePago = cy.get('.movistar-buy-method-button');
        divMetodosDePago.should('be.visible').should('contain.text','18');
    });

    it('CP002-Aplicar filtro de equipos -Gama.Alta -Memoria Interna.256GB',function(){
        let filtro = cy.get('li > .btn-group > .btn-filter > [data-label-placement=""] > .icon');
        filtro.click();
        let gamaAlta = cy.get(':nth-child(4) > .filter-group > .filter-data-section > :nth-child(3) > a > .filter-info-label');
        gamaAlta.click();
        cy.get('li > .btn-group > .btn-filter > [data-label-placement=""] > .icon').click();
        let memoria256 = cy.get(':nth-child(3) > .filter-group > .filter-data-section > :nth-child(2) > a > .filter-info-label');
        memoria256.click();
        let containerCelulares = cy.get('.filter-info.f-active')
        let arrayCelulares = Object.entries(containerCelulares); 
        cy.log("Elementos encontrados", arrayCelulares.length); 
    });

    it('CP003-Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa', function(){
        //primer paramentro banco, segundo parametro tarjeta, tercer parametro cantidad de cuotas
        movistarCuotas.filtrarCuotas('Credicoop','Visa','60');
     });

    it('CP004: Agregar producto al Carrito de compras chequear que se agregue y luego eliminarlo y comprobar si el carrito esta vacio', function(){
        //addToCart recibe por parametro el equipo que queremos agregar
        movistarCart.addToCart('A02s');
        movistarCart.delToCart();
        movistarCart.CheckEmptyCart();
    });

    it('CP005: Seleccionar por marcas de celulares y chequear que devuelva el listado con todos los equipos de la marca correcta',function(){
    //por parametro se le puede pasar LG, Motorola, Samsung, Nokia, Alcatel, Apple y entra en cada categoria y recorre todos los equipos de la lista
    //para chequear que todos correspondan con dicha marca y que no se haya filtrado alguno de otra marca. 
        movistarMarcas.filtrarMarcas('Nokia')
    });

    it('Probar menu nav en diferentes tamaños de pantalla', function(){
        //320x569, 360x640, 480x854,1024x640, 1366x768, 1920x1080, ipad-2
        movistarNav.chekBySize(1024,768);
        movistarNav.chekBySize(800,600);
        movistarNav.chekByDevice('iphone-6+','landscape');
        movistarNav.chekByDevice('iphone-6+','portrait');
        movistarNav.chekByDevice('iphone-4', 'portrait');
        movistarNav.chekByDevice('iphone-4','landscape');
        movistarNav.chekByDevice('ipad-mini');
    });

});





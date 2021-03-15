class movistar{
    //agrega al carrito el celular que se le pase por parametro
    addToCart = (element)=>{
        cy.fixture('Cart.json').then((locators)=>{
            cy.get(locators.iconSearch).click().click();
            cy.get(locators.inputSearch).click().type(element).type('{enter}');
            cy.get(locators.buyPhone).click();
            cy.get(locators.buyPhone2).click();
            cy.get(locators.checkPhone).should('contain.text',element);  
        });
    };
    //borra el celular agregado
    delToCart = ()=>{
        cy.fixture('Cart.json').then((locators)=>{
        cy.get(locators.delPhoneCart).click();
        cy.url().should('eq', 'https://tienda.movistar.com.ar/')
        });
    };
    //Verifica que el carrito hay quedado vacio
    CheckEmptyCart = ()=>{
        cy.get('.header-minicart > .label').click();
        cy.get('.details').should('contain.text', 'No tiene artículos en su carro de compras.');
    };
};

export default new movistar();

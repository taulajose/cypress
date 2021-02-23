class Nav{
    chekBySize = (x,y)=>{
        cy.fixture('nav.json').then ((element)=>{
            cy.viewport(x,y);
            if(x >= 993){
            cy.get(element.nav).should('be.visible');
            cy.get(element.header).screenshot("Vista "+ x +" x " + y);
        }else{
            cy.get(element.nav).should('not.be.visible');
            cy.get(element.burger).should('be.visible');
            cy.get(element.header).screenshot("Vista "+ x +" x " + y);    
        }
        });
    }
    chekByDevice = (dispositivo, orientacion)=>{
        cy.fixture('nav.json').then((element)=>{
            if(orientacion===undefined){
                cy.viewport(dispositivo);
                orientacion="";
            }else{
                cy.viewport(dispositivo,orientacion);
            }
            cy.get(element.nav).should('not.be.visible');
            cy.get(element.header).screenshot("Vista "+dispositivo+orientacion);
            cy.get(element.burger).should('be.visible');
        });
    }

}

export default new Nav();
class Marcas {
    filtrarMarcas = (dato)=>{
        cy.fixture('marcas.json').then((marca)=>{
            let marcaArray = Object.entries(marca)
            marcaArray.forEach((element) => {
                console.log(typeof(element[0]))
                if (element[0] == dato){
                    cy.get(element[1]).click();
                    cy.get(marca.etiquetas).each((equipos)=>{
                        cy.wrap(equipos).should('have.text',dato);
                    });
                 };
            });
        }); 
    };
};
   
export default new Marcas
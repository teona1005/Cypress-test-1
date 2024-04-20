import testdata from '../fixtures/user.json'
describe ('test3', ()=> {
    it ('Register Useredit account details', ()=> { 
        
        cy.visit ('https://automationteststore.com');
        cy.login (testdata.UserName,testdata.Password)
    })
})
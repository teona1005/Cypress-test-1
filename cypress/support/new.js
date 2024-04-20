Cypress.Commands.add ("log,in", (User,password)=>{cy.contains ("Login or register").click ();
cy.get('.returncustomer > .heading2').should ('be.visible');
cy.get('#loginFrm_loginname').type('User');
cy.get('#loginFrm_password').type('password');
cy.get('#loginFrm > fieldset > .btn').click();
/*cy.get('.maintext').should ("have.text", " Account Login");

cy.get('#accountFrm > fieldset > .btn'). click ();
cy.get('.maintext').should ("have.text", " Create Account");
cy.get('#AccountFrm_firstname').type ("teona");
cy.get('#AccountFrm_lastname').type ("kotuashvili");
cy.get('#AccountFrm_email').type ("test199989@gmail.com");
cy.get('#AccountFrm_address_1').type ("brooklyn");
cy.get('#AccountFrm_city').type ("New-york");
cy.get('#AccountFrm_zone_id').select ('Kent');
cy.get('#AccountFrm_postcode').type('01234567');
cy.get('#AccountFrm_country_id').select ('Chile');
cy.get('#AccountFrm_loginname').type('testtest1234');
cy.get('#AccountFrm_password').type('testtest123');
cy.get('#AccountFrm_confirm').type('testtest123');
cy.get('#AccountFrm_newsletter0').check();
cy.get('#AccountFrm_agree').check();
cy.get('#AccountFrm_zone_id').select ('Atacama');
cy.get('.col-md-2 > .btn').type('Continue');
cy.contains ('Welcome back teona').should ("be.visible");
cy.get('.maintext').contains (" Your Account Has Been Created!").should ("be.visible");*/

});



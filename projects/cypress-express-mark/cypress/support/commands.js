// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('createTask', (taskName = '')=> {
    cy.visit('/')     

    if(taskName !== ''){
        //using xpath library for supporting xpath
        //cy.xpath('//*[@id="newTask"]').type(taskName)

        cy.get('input[placeholder="Add a new Task"]').type(taskName)
    }

    // Cypress does not have support for xpath 
    //alternatively, it has some ways to handle those lack of xpath support, such as:
    cy.contains('button', 'Create').click()
})

Cypress.Commands.add('deleteTaskByName', (taskName)=> {
    cy.request({
        url: Cypress.env('apiUrl') + '/helper/tasks',
        method: 'DELETE',
        body: {name: taskName}
    }).then(response => {
        expect(response.status).to.eq(204)
    })
})

Cypress.Commands.add('postCreateTask', (createTaskJson)=> {
    cy.request({
        url: Cypress.env('apiUrl') + '/tasks',
        method: 'POST',
        body: createTaskJson
    }).then(response => {
        expect(response.status).to.eq(201)
    })
})

Cypress.Commands.add('validateRequiredField', (element, expectedMessage) => {
    cy.get(element)
    .invoke('prop', 'validationMessage')
    .should((text) => {
        expect(
            expectedMessage
        ).to.eq(text)
    })
})
/// <reference types="cypress" />

describe.skip('tasks', ()=>{

    let testData;

    before(() => {
        cy.fixture('tasks').then(tasks => {
            testData = tasks
        })
        
    })

    context('create tasks', () => {

        it('should include a new task into the system', ()=> {

            const taskName = "selenium vs cypress"
    
            cy.deleteTaskByName(taskName)
    
            cy.createTask(taskName)
            
            cy.contains('[data-testid="task-item"]', taskName).should('be.visible')
        })
    
        it('should not accept duplicated tasks', () => {
    
            const taskJson = testData.duplicated
    
            cy.deleteTaskByName(taskJson.name)
    
            cy.postCreateTask(taskJson)
    
            cy.createTask(taskJson.name)
    
            cy.get('#swal2-html-container')
                .should('be.visible')
                .should('have.text', 'Task already exists!')
    
        })
    
        it('text field should be mandatory', () => {
            cy.createTask()
    
            cy.validateRequiredField('input[placeholder="Add a new Task"]', 'This is a required field')
        })
    })

    context('finishing tasks', () => {
        it('should finish a task', () => {
            const taskJson = {
                name: 'Join UnitedLex :D',
                is_done: false
            }

            cy.deleteTaskByName(taskJson.name)
            cy.postCreateTask(taskJson)

            cy.visit('/')

            cy.contains('p', taskJson.name)
                .parent()
                .find('button[class*=ItemToggle]')
                .click()

            cy.contains('p', taskJson.name)
                .should('have.css', 'text-decoration-line', 'line-through')
        })
    })

    context('removing tasks', () => {
        it('should remove a task', () => {
            const taskJson = {
                name: 'Exclude me!',
                is_done: false
            }

            cy.deleteTaskByName(taskJson.name)
            cy.postCreateTask(taskJson)

            cy.visit('/')

            cy.contains('p', taskJson.name)
                .parent()
                .find('button[class*=ItemDelete]')
                .click()

            cy.contains('p', taskJson.name)
                .should('not.exist')
        })
    })
    
})
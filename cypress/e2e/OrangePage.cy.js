const { beforeEach } = require("mocha")
import selectores from "../selectores/selectores"

describe('template spec', () => {
  beforeEach('conecto la web',()=>{
    cy.viewport(390,844)
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('login', ()=> {
    //cy.get(selectores.login.user).type('Admin')
    //cy.get(selectores.login.pass).type('admin123')
    //cy.get(selectores.login.btn_login).click()
    cy.login()
      
     
    cy.cliquear(selectores.admin.menu,0)
    cy.cliquear(selectores.admin.menu_admin,0)
    cy.cliquear(selectores.admin.btn_add,0)

    cy.esperar()
  })




})
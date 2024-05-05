import '../support/commands'

const googleUrl = "https://www.google.com/"

describe('First Sigit Cypress Test', () => {
  it('Find Sigit in Google', () => {
    cy.log('Accessing Google')
    cy.accessGoogle()
    expect(true).to.equal(true)
    // cy.log('Initialize with login as admin user and enter publisher namespace')
    // cy.adminLoginGoToUGCContents(userAdmin, this, false)

    // cy.get(ugc.field_input_search_content, { timeout: timeout.short }).should('be.visible').type(creatorOfficial.content.name + '{enter}')
    // cy.contains(creatorOfficial.content.name).parent('tr').within(() => {
    //   cy.get('td').eq(5).find(ugc.action_view_content_list).click()
    // })
    // cy.get(global.page_title_detail).should('be.visible').should('have.text', creatorOfficial.content.name)
    // for (let n = 1; n <= 3; n++) {
    //   cy.log('Screenshot' + n)
    //   cy.get(ugc.button_add_screenshot).should('have.text', 'New Screenshot').click()
    //   cy.get(ugc.modal).should('be.visible').within(() => {
    //     cy.wait(10000).uploadImage(ugc.field_content_screenshot_file, 'accelbyte_logo.png')
    //     cy.get(ugc.modal_footer_button).contains('Cancel').should('be.visible')
    //     cy.get(ugc.modal_footer_button).contains('Upload').should('be.visible').click()
    //   })
    //   cy.get(ugc.modal).should('not.exist', { timeout: 10000 })
    //   cy.get(global.page_title_detail).should('be.visible').should('have.text', creatorOfficial.content.name)
    //   cy.get(global.notif_stack).contains('Images uploaded').should('be.visible')
    //   cy.wait(2000)
    //   cy.get(ugc.container_screenshot).find('table').find('tr').eq(n).find('td').eq(2).find('span').eq(1).then(($text) => {
    //     cy.log($text.text())
    //     cy.verifyUploadImageUrl($text.text())
    //   })
    // }
    // cy.log('Success add multiple screenshots')
    // cy.get(ugc.container_screenshot).find('table').find('tbody').find('tr').should('have.length', 3)
  })
})

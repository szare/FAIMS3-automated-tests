import {newNoteBookFixture} from "../../fixture/newNoteBook";
import {scrollDown, scrollUp} from "../utils/scroll";
import * as assert from "assert";

/*Locators*/
const timeOutElement = 30000
const homeSignIn = '//android.widget.TextView[@text=\'SIGN IN\']'
const signInButtonLocator = '//android.widget.Button[@text=\'SIGN IN\']'
//New NoteBook
const projectNameLocator = '//*[@resource-id=\'name\']'
const descriptionLocator = '//*[@resource-id=\'pre_description\']'
const leadLocator = '//*[@resource-id=\'project_lead\']'
const lead_institutionLocator = '//*[@resource-id=\'lead_institution\']'

const goToNextButtonLocator = '//android.widget.Button[@text=\'GO TO NEXT\']'
/*Meta*/
const metaFieldLocator = '//*[@resource-id=\'metaadd\']'
const metaAddButtonLocator = '//*[@resource-id=\'AddMetaButton\']'
const userRolesLocator = '//*[@resource-id=\'accessadded\']'
const addUserRoleButtonLocator = '//*[@resource-id=\'AddUserRoleButton\']'
/*Attachment*/
//
const attachFieldLocator = '//*[@resource-id=\'projectinfopanel-3\']/android.view.View/android.view.View'
const imageSearch = '//*[@resource-id=\'com.google.android.documentsui:id/search_chip_group\']/android.widget.CompoundButton'
const imageRoot = '//*[@resource-id=\'com.google.android.documentsui:id/item_root\']'
const goNextAttachLocator = '//*[@resource-id=\'gotonext_info\']'

//Sections
const checkBoxAccessLocator = '//*[@resource-id=\'formaccessinheritFORM1\']'
const descriptionSection = '//*[@resource-id=\'sectiondescriptionFORM1SECTION1\']'
const textFieldInput = '//android.widget.Button[@text=\'Input field text plus special characters\']'
const submitButtonLocator = '//*[@resource-id=\'primarytab-5\']'
const submitSaveButtonLocator = '//*[@resource-id=\'submit_save\']'

//Menu
const menuLocator = '//android.widget.Button[@text=\'open drawer\']'
const newNoteBookMenuLocator = '//android.widget.TextView[@text=\'New Notebook\']'
const userMenuLocator = '//android.widget.TextView[@text=\'User\']'
const workSpaceMenuLocator = '//android.widget.TextView[@text=\'WorkSpace\']'
const noteBooksMenuLocator = '//android.widget.Button[@text=\'Notebooks\']'

//Notebook Record
const recordsTabLocator = '//*[@resource-id=\'notebook-tab-0\']'
const infoTabLocator = '//*[@resource-id=\'notebook-tab-1\']'
const settingsTabLocator = '//*[@resource-id=\'notebook-tab-2\']'
const recordsNoteBookLocator = '//*[@resource-id=\'notebook-records-tab-0\']'
const draftsNoteBookTabLocator = '//*[@resource-id=\'notebook-records-tab-1\']'
const refreshNoteBookLocator = '//android.widget.Button[@text=\'REFRESH\']'

//User
const currentUserLocator = '//android.widget.TextView[@text=\'CURRENT USER\']'

//WorkSpace
const activedLocator = '//android.widget.TabWidget/android.view.View[1]'
const availableLocator = '//android.widget.TabWidget/android.view.View[2]'

describe("just for test inspector", () => {
    it("sign-in", async () => {
        //! set context
        const contexts = await driver.getContexts(); // get list of context
        await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE

        const homePageSignInButton = (
            await $(homeSignIn)
        )
        await waitElementAndClick(homePageSignInButton, timeOutElement)

        const signInButton = (
            await $(signInButtonLocator)
        )
        await waitElementAndClick(signInButton, timeOutElement)

        const returnToApp = (await $('//android.widget.TextView[@text=\'Return to App\']')
        )
        await waitElementAndClick(returnToApp, timeOutElement)

        const sideBar = (
            await $(menuLocator)
        )
        await waitElementAndClick(sideBar, timeOutElement)

        const newNoteBookBtn = (
            await $(newNoteBookMenuLocator)
        )
        await waitElementAndClick(newNoteBookBtn, timeOutElement)

        const backSideBarButton = (await $('//android.widget.Button'))
        await waitElementAndClick(backSideBarButton, timeOutElement)

        const tabText = (await $('//*[@resource-id=\'primarytab-1\']'))
        let tabTextGet = await waitElementAndGetText(tabText, timeOutElement)

        assert.equal(tabTextGet, 'DESIGN', 'Tabs not presented')
    });

    it("New noteBook", async () => {
        //? GENERAL
        //* fill Inputs
        const projectName = (await $(projectNameLocator))
        await waitElementAndSendKeys(projectName, newNoteBookFixture.projectName, timeOutElement)

        await scrollDown()

        const desc = (await $(descriptionLocator))
        await waitElementAndSendKeys(desc, newNoteBookFixture.desc, timeOutElement)

        const lead = (await $(leadLocator))
        await waitElementAndSendKeys(lead, newNoteBookFixture.lead, timeOutElement)

        const leadInstitution = (await $(lead_institutionLocator))
        await waitElementAndSendKeys(leadInstitution, newNoteBookFixture.lead, timeOutElement)

        // //! GO TO NEXT
        const goNextButton = (await $(goToNextButtonLocator))
        await waitElementAndClick(goNextButton, timeOutElement)

        // //? META
        const metaData = (await $(metaFieldLocator))
        await waitElementAndSendKeys(metaData, newNoteBookFixture.newMeta, timeOutElement)

        const addButtonMeta = (await $(metaAddButtonLocator))
        await waitElementAndClick(addButtonMeta, timeOutElement)
        await waitElementAndClick(goNextButton, timeOutElement)

        //User role
        const userRoleField = (await $(userRolesLocator))
        const userRoleAddButton = (await $(addUserRoleButtonLocator))
        await waitElementAndSendKeys(userRoleField, newNoteBookFixture.newRole, timeOutElement)
        await waitElementAndClick(userRoleAddButton, timeOutElement)
        await waitElementAndClick(goNextButton, timeOutElement)

        //Attach
        const attachField = await $(attachFieldLocator)
        await waitElementAndClick(attachField, timeOutElement)

        const searchImageButton = await $(imageSearch)
        await waitElementAndClick(searchImageButton, timeOutElement)

        const searchImageRootButton = await $(imageRoot)
        await waitElementAndClick(searchImageRootButton, timeOutElement)

        scrollDown()
        const goNextAttachButton = await $(goNextAttachLocator)
        await waitElementAndClick(goNextAttachButton, timeOutElement)


        // //click on SECTION DEFINITION

        const inheritAccess = await $(checkBoxAccessLocator)
        await waitElementAndClick(inheritAccess, timeOutElement)
        await waitElementAndClick(goNextAttachButton, timeOutElement)

        scrollDown()

        const descField = await $(descriptionSection)
        await waitElementAndSendKeys(descField, 'Some desc', timeOutElement)
        scrollDown()

        await waitElementAndClick(goNextAttachButton, timeOutElement)

        const inputTextField = await $(textFieldInput)
        await waitElementAndClick(inputTextField, timeOutElement)

        scrollUp()


        const sub = await $(submitButtonLocator)
        await waitElementAndClick(sub, timeOutElement)


        const submitSave = await $(submitSaveButtonLocator)
        await waitElementAndClick(submitSave, timeOutElement)
        scrollUp()

        const sideBar = (
            await $(menuLocator)
        )
        await waitElementAndClick(sideBar, timeOutElement)

        const newNoteBookBtn = (
            await $(noteBooksMenuLocator)
        )
        await waitElementAndClick(newNoteBookBtn, timeOutElement)

        const newNoteRecord = (
            await $('//android.widget.TextView[@text=\'Appium Testing Notebook\']')
        )
        let noteName = await waitElementAndGetText(newNoteRecord, timeOutElement)

        assert.equal(noteName, newNoteBookFixture.projectName, 'Incorrect project name')
        const backSideBarButton = (await $('//android.widget.Button'))
        await waitElementAndClick(backSideBarButton, timeOutElement)
    });

    it('new Record', async () => {
        const sideBar = (
            await $(menuLocator)
        )
        await waitElementAndClick(sideBar, timeOutElement)

        const newNoteRecord = (
            await $('//android.widget.TextView[@text=\'Appium Testing Notebook\']')
        )

        await waitElementAndClick(newNoteRecord, timeOutElement)

      const backSideBarButton = (await $('//android.widget.Button'))
      await waitElementAndClick(backSideBarButton, timeOutElement)

      const infoTab = await $(infoTabLocator)
      const settingsTab = await $(settingsTabLocator)
      const recordTab = await $(recordsTabLocator)

      await waitElementAndClick(infoTab,timeOutElement)
      await waitElementAndClick(settingsTab,timeOutElement)
      await waitElementAndClick(recordTab,timeOutElement)

      const drafts = await $(draftsNoteBookTabLocator)
      const records = await $(recordsNoteBookLocator)

      await waitElementAndClick(drafts,timeOutElement)
      await waitElementAndClick(records,timeOutElement)
    })

  it('Refresh notebook', async () => {
      const refreshButton = await $(refreshNoteBookLocator)
      await waitElementAndClick(refreshButton,timeOutElement)
  })

  it('User check page', async () => {
    const sideBar = (
        await $(menuLocator)
    )
    await waitElementAndClick(sideBar,timeOutElement)

    const userMenu = await $(userMenuLocator)
    await waitElementAndClick(userMenu,timeOutElement)

    const backSideBarButton = (await $('//android.widget.Button'))
    await waitElementAndClick(backSideBarButton, timeOutElement)

    const currentUser = await $(currentUserLocator)
    let currentUserDisplay = await isElementPresent(currentUser, timeOutElement)

    assert.ok(currentUserDisplay,"Current user not presented")
  })

  it('Check workspace', async () => {
    const sideBar = (
        await $(menuLocator)
    )
    await waitElementAndClick(sideBar,timeOutElement)

    const workSpace = await $(workSpaceMenuLocator)
    await waitElementAndClick(workSpace,timeOutElement)

    const backSideBarButton = (await $('//android.widget.Button'))
    await waitElementAndClick(backSideBarButton, timeOutElement)


    const availableTab = await $(availableLocator)
    const activedTab = await $(activedLocator)
    let workSpaceTabs = await isElementPresent(availableTab,timeOutElement)

    await waitElementAndClick(availableTab,timeOutElement)
    await waitElementAndClick(activedTab,timeOutElement)

    assert.ok(workSpaceTabs,'Workspaces tab not presented')
  })


    async function waitElementAndClick(element: WebdriverIO.Element, timeout: number) {
        await element.waitForDisplayed({timeout: timeout})
        await element.click()
    }

  async function isElementPresent(element: WebdriverIO.Element, timeout: number):Promise<boolean> {
    return await element.waitForDisplayed({timeout: timeout})
  }
    async function waitElementAndGetText(element: WebdriverIO.Element, timeout: number) {
        await element.waitForDisplayed({timeout: timeout})
        return await element.getText()
    }

    async function waitElementAndSendKeys(element: WebdriverIO.Element, keys: string, timeout: number) {
        await element.waitForDisplayed({timeout: timeout})
        await element.setValue(keys)
    }


});

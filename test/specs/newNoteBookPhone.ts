
import { newNoteBookFixture } from "../../fixture/newNoteBook";
import { scrollDown } from "../utils/scroll";
describe('just for test inspector', () => {
    it('sign-in', async () => {
        await driver.pause(25000); // Pause for 25 second to load FAIMS3

        //! set context
        const contexts = await driver.getContexts(); // get list of context
        await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE

        const homePageSignInButton = (await $('(//android.view.View[@content-desc="SIGN IN"])[2]')).click()
        const signInButton = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[4]/android.widget.Button')).click()
        

        await driver.pause(3000); // Pause for 3 second to load FAIMS3-Auth
        const returnToApp = (await $('//android.view.View[@content-desc="Return to App"]')).click()
        
        
        await driver.pause(25000); // Pause for 25 second to load FAIMS3
        
        const sideBar = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button')).click()
        const newNoteBookBtn = (await $('//android.view.View[@content-desc="New Notebook"]')).click()
        await driver.pause(3000); // Pause for 3 second    
        const cr = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button')).click()
        await driver.pause(3000); // Pause for 3 second 
    
        })

    it('New noteBook - INFO', async () => {
            //? GENERAL
            await driver.touchAction([ //Scroll down(for xPath)
                { action: 'longPress', x: 0, y: 1500 }, 
                { action: 'moveTo', x: 0, y: 5 },
                'release'
            ])
            //* fill Inputs
            const projectName = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue(newNoteBookFixture.projectName)
            const desc = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue(newNoteBookFixture.desc)
            const lead = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue(newNoteBookFixture.lead)
            await driver.pause(1000); // Pause for 1 second to load elements
            const leadInst = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue(newNoteBookFixture.leadInstitiution)
            await driver.pause(1000); // Pause for 1 second to load elements
            //! GO TO NEXT
            const goToNextGeneral = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button')).click()
            //? META
            const newMetaDataLabel = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText'))
            const addMetaData = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.Button'))
            await newMetaDataLabel.setValue(newNoteBookFixture.newMeta)   
            await addMetaData.click()
            await newMetaDataLabel.clearValue()
            // ! GO TO NEXT
            const goToNextInfo = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button')).click()

            //? USER ROLE
            await driver.pause(1000); // Pause for 1 second to load elements
            const newRole = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText')
            const addRole = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.Button'))
            await newRole.setValue(newNoteBookFixture.newRole)
            await addRole.click()
            await newRole.clearValue()
            //! GO TO NEXT
            await driver.pause(1000); // Pause for 1 second to load elements
            const goToNextUserRole = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button')).click()
            //? ATTACHMENT
            const attach = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View')).click()
            await driver.pause(2000); // Pause for 3 second
            const selectImage = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.widget.ScrollView/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.TextView')).click()
            await driver.pause(5000); // Pause for 5 second to load image
            
            await driver.touchAction([ //Scroll down(for xPath)
                { action: 'longPress', x: 0, y: 1500 },
                { action: 'moveTo', x: 0, y: 5 },
                'release'
            ])
            //! GO TO NEXT
            const goToNextAttachment = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.Button')).click()
            


            await driver.pause(25000); // Pause for 25 second just for trace
    })
})


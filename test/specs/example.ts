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
        const closeSideBar = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button')).click()
    })

    it('New noteBook', async () => {
            //* Scroll dowm(for xPath)
            await driver.touchAction([
                { action: 'longPress', x: 0, y: 1500 },
                { action: 'moveTo', x: 0, y: 5 },
                'release'
            ])

            //! fill Inputs
            const projectName = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue("TEST VALUE")
            const desc = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue("TEST VALUE")
            const lead = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue("TEST VALUE")
            const leadInst = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]/android.widget.EditText')).setValue("TEST VALUE")
            //! GO TO NEXT
            const goToNext = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button')).click()
        
            await driver.pause(25000); // Pause for 25 second just for trace
    })
})
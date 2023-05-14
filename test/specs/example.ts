describe('just for test inspector', () => {
    it('click on sign in button', async () => {
        await driver.pause(50000); // Pause for 50 second to load FAIMS3
        
        //! set context
        const contexts = await driver.getContexts();
        console.log(contexts); // Check the available contexts
        await driver.switchContext(contexts[0].toString());
        console.log(await driver.getContext()); // Log the current context
        
        const sideBar = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View/android.widget.Button')).click()
        await driver.pause(3000); // Pause for 3 second 'just for trace'
        const newNoteBookBtn = (await $('//android.view.View[@content-desc="New Notebook"]')).click()
        const closeSideBar = (await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button')).click()
        

        await driver.pause(20000); // Pause for 20 second for trace

    })
})
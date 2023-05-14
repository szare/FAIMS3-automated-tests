describe('just for test inspector', () => {
    it('click on sign in button', async () => {
        await driver.pause(50000); // Pause for 1 second

        const SIGNIN = (await $('(//android.view.View[@content-desc="SIGN IN"])[2]/android.widget.TextView')).click()

        const contexts = await driver.getContexts();
        console.log(contexts); // Check the available contexts
        await driver.switchContext(contexts[0].toString());
        console.log(await driver.getContext()); // Log the current context

        await driver.pause(50000); // Pause for 1 second

    })
})
describe('just for test inspector', () => {
    it('click on sign in button', async () => {
        const className = await $('android.widget.TextView')
        await className.click()
    })
})


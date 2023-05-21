export const scrollDown = async()=>{
    await driver.touchAction([ //Scroll down(for xPath)
    { action: 'longPress', x: 0, y: 1500 },
    { action: 'moveTo', x: 0, y: 5 },
    'release'
])
}
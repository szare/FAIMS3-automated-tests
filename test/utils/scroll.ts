export const scrollDown = async()=>{
    await driver.touchAction([ //Scroll down(for xPath)
    { action: 'longPress', x: 0, y: 1500 },
    { action: 'moveTo', x: 0, y: 5 },
    'release'
])
}
export const scrollUp = async()=>{
    await driver.touchAction([ //Scroll up(for xPath)
        { action: 'longPress', x: 0, y: 700 },
        { action: 'moveTo', x: 0, y: 3700 },
        'release'
    ])
}
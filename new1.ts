import { newNoteBookFixture } from "../../fixture/newNoteBook";
import { scrollDown } from "../utils/scroll";

describe("just for test inspector", () => {
  it("sign-in", async () => {
    await driver.pause(25000);

    const homePageSignInButton = (await $('(//android.view.View[@content-desc="SIGN IN"])[2]')).click();
    const signInButton = (
      await $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[4]/android.widget.Button"
      )
    ).click();

    await driver.pause(3000);
    const returnToApp = (await $('//android.view.View[@content-desc="Return to App"]')).click();

    await driver.pause(25000);

    const sideBar = (
      await $(
        "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button"
      )
    ).click();
    const newNoteBookBtn = (await $('//android.view.View[@content-desc="New Notebook"]')).click();
    await driver.pause(3000);
    const cr = (
      await $("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button")
    ).click();

    console.log("--------------New noteBook - INFO--------------------------------");
    await driver.pause(2000);

    const hhh = await $("/hierarchy/android.widget.FrameLayout");
    //! Design tab
    const goToNextGeneral = (await $("//*[@resource-id='primarytab-1']")).click();
    console.log("--------------next Design--------------------------------");
    console.log("--------------next Design--------------------------------");
    await driver.pause(4000);

    await driver.touchAction([
      //Scroll down(for xPath)
      { action: "longPress", x: 0, y: 1800 },
      { action: "moveTo", x: 0, y: 5 },
      "release",
    ]);

    await driver.touchAction([
      //Scroll down(for xPath)
      { action: "longPress", x: 0, y: 1800 },
      { action: "moveTo", x: 0, y: 500 },
      "release",
    ]);

    await driver.pause(6000);

    await driver.touchAction({
      action: "tap",
      x: 200,
      y: 1620,
    });
    // const goToNextGeneral_ddd2 = (await $("//*[@resource-id='gotonext_info']")).click();
    console.log("--------------next btn 111--------------------------------");

    await driver.pause(11000); // Pause for 25 second just for trace
  });
});

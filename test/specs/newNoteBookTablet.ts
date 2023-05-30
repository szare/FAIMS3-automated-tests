import { newNoteBookFixture } from "../../fixture/newNoteBook";
import { scrollDown } from "../utils/scroll";
describe("just for test inspector", () => {
  it("sign-in", async () => {
    await driver.pause(25000); // Pause for 25 second to load FAIMS3

    //! set context
    const contexts = await driver.getContexts(); // get list of context
    await driver.switchContext(contexts[0].toString()); // set context to APP_NATIVE

    const homePageSignInButton = (
      await $('(//android.view.View[@content-desc="SIGN IN"])[2]')
    ).click();
    const signInButton = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[4]/android.widget.Button'
      )
    ).click();

    await driver.pause(2000); // Pause for 3 second to load FAIMS3-Auth
    const returnToApp = (
      await $('//android.view.View[@content-desc="Return to App"]')
    ).click();

    await driver.pause(25000); // Pause for 25 second to load FAIMS3

    const sideBar = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button'
      )
    ).click();
    const newNoteBookBtn = (
      await $('//android.view.View[@content-desc="New Notebook"]')
    ).click();
    await driver.pause(2000); // Pause for 3 second
    const cr = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.Button'
      )
    ).click();
    await driver.pause(2000); // Pause for 3 second
  });

  it("New noteBook", async () => {
    //? GENERAL
    //* fill Inputs
    const projectName = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText'
      )
    ).setValue(newNoteBookFixture.projectName);
    const desc = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.EditText'
      )
    ).setValue(newNoteBookFixture.desc);
    const lead = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[3]/android.view.View/android.view.View[2]/android.widget.EditText'
      )
    ).setValue(newNoteBookFixture.lead);
    await driver.pause(1000); // Pause for 1 second to load elements
    const leadInst = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[4]/android.view.View/android.view.View[2]/android.widget.EditText'
      )
    ).setValue(newNoteBookFixture.leadInstitiution);
    await driver.pause(1000); // Pause for 1 second to load elements

    //! GO TO NEXT
    const goToNextGeneral = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button'
      )
    ).click();

    //? META
    const newMetaDataLabel = await $(
      '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText'
    );
    const addMetaData = await $(
      '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.Button'
    );
    await newMetaDataLabel.setValue(newNoteBookFixture.newMeta);
    await addMetaData.click();
    await newMetaDataLabel.clearValue();

    // ! GO TO NEXT
    const goToNextInfo = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button'
      )
    ).click();

    //? USER ROLE
    await driver.pause(1000); // Pause for 1 second to load elements
    const newRole = await $(
      '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[1]/android.view.View/android.view.View[2]/android.widget.EditText'
    );
    const addRole = await $(
      '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View[2]/android.widget.Button'
    );
    await newRole.setValue(newNoteBookFixture.newRole);
    await addRole.click();
    await newRole.clearValue();

    //! GO TO NEXT
    await driver.pause(1000); // Pause for 1 second to load elements

    const goToNextUserRole = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button'
      )
    ).click();
    //? ATTACHMENT
    const attach = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View'
      )
    ).click();
    await driver.pause(2000); // Pause for 2 second
    const selectImage = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of Files."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.FrameLayout[2]/android.widget.LinearLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView'
      )
    ).click();
    await driver.pause(1000); // Pause for 3 second to load image

    //! GO TO NEXT
    const goToNextAttachment = (
      await $(
        '//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.widget.Button'
      )
    ).click();

    //click on SECTION DEFINITION
    await driver.pause(2000); // Pause for 1 second to load elements
    await driver.touchAction({
      action: "tap",
      x: 360,
      y: 810,
    });

    //click on component
    await driver.pause(2000); // Pause for 1 second to load elements
    await driver.touchAction({
      action: "tap",
      x: 174,
      y: 1218,
    });

    //click on input text component
    await driver.pause(2000); // Pause for 1 second to load elements
    await driver.touchAction({
      action: "tap",
      x: 664,
      y: 1278,
    });
    //click on submit
    await driver.pause(2000); // Pause for 1 second to load elements
    await driver.touchAction({
      action: "tap",
      x: 855,
      y: 477,
    });

    //click on save noteBook
    await driver.pause(2000); // Pause for 1 second to load elements
    await driver.touchAction({
      action: "tap",
      x: 137,
      y: 556,
    });
    await driver.pause(10000); // Pause for 10 seconds to checking the output
  });

  // it('new Record', async () => {
  //     await driver.pause(5000); // Pause for 1 second to load elements
  //  const sidebar = (await $('//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Button')).click()
  //  const newRecord= (await $('//android.view.ViewGroup[@content-desc="Caption bar of FAIMS3."]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.widget.ListView[1]/android.widget.Button')).click()

  // })
});

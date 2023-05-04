///<reference types='cypress'/>

import { LOCAL_NEW_NOTEBOOK } from "../constants/routes/URL";

before(() => {
  cy.clearCookie("deviceId");
  cy.setCookie("deviceId", "Automation_Test");
  cy.visit(LOCAL_NEW_NOTEBOOK);
  cy.wait(15000)
});

beforeEach(() => {
  cy.clearCookie("deviceId");
  cy.setCookie("deviceId", "Automation_Test");
});

describe("FAIMS3 => New NoteBook", () => {

    it("Should have correct url", () => {
      cy.url({ timeout: 35000 }).should("eq", LOCAL_NEW_NOTEBOOK);
    });

    it("fill Info/General/Project Name field", () => {
      cy.fixture("newNoteBook.json").then(function (data) {
      cy.get("#name").type(data.projectName);
    });
  });
});

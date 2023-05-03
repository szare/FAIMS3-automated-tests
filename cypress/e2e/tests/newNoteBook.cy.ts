///<reference types='cypress'/>

import { LOCAL_NEW_NOTEBOOK } from "../constants/routes/URL";

before(() => {
  cy.clearCookie("deviceId");
  cy.setCookie("deviceId", "Automation_Test");
  cy.visit(LOCAL_NEW_NOTEBOOK);
});

beforeEach(() => {
  cy.clearCookie("deviceId");
  cy.setCookie("deviceId", "Automation_Test");
  cy.viewport(375, 665);
});

describe("FAIMS3 => New NoteBook", () => {

  it("Should have correct url", () => {
    cy.url({ timeout: 35000 }).should("eq", LOCAL_NEW_NOTEBOOK);
  });
});

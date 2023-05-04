///<reference types='cypress'/>

import { LOCAL_NEW_NOTEBOOK } from "../constants/routes/URL";

let noteBook;

before(() => {
  cy.clearCookie("deviceId");
  cy.setCookie("deviceId", "Automation_Test");
  cy.visit(LOCAL_NEW_NOTEBOOK);
  cy.wait(15000);
  //* load Fixture
  cy.fixture("newNoteBook.json").then(function (data) {
    noteBook = data;
  });
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
    cy.get("#name").type(noteBook.projectName);
  });
  it("fill Info/General/Description field", () => {
    cy.get("#pre_description").type(noteBook.description);
  });
  it("fill Info/General/lead Name field", () => {
    cy.get("#project_lead").type(noteBook.lead);
  });
  it("fill Info/General/leadInstitution field", () => {
    cy.get("#lead_institution").type(noteBook.leadInstitution);
  });
});

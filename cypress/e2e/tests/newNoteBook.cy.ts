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
  it("click on GO TO NEXT(GENERAL form)", () => {
    cy.get("#gotonext_info").click({ force: true });
  });
  it("Should have same url", () => {
    cy.url({ timeout: 35000 }).should("eq", LOCAL_NEW_NOTEBOOK);
  });
  it("add 3 new meta component", () => {
    cy.get("#metaadd").type(noteBook.meta1)
    cy.get("#AddMetaButton").click({ force: true });
    cy.get("#metaadd").clear().type(noteBook.meta2)
    cy.get("#AddMetaButton").click({ force: true });
    cy.get("#metaadd").clear().type(noteBook.meta3)
    cy.get("#AddMetaButton").click({ force: true });
  });

  it("add duplicate new meta component", () => {
    cy.get("#metaadd").type(noteBook.meta1).clear()
    cy.get("#AddMetaButton").click({ force: true });
  });

  it("count metas count", () => {
    cy.get("input").should("have.length", 4);
  });
  it("click on GO TO NEXT(META form)", () => {
    cy.get("#gotonext_info").click({ force: true });
  });
  it("Should have same url", () => {
    cy.url({ timeout: 35000 }).should("eq", LOCAL_NEW_NOTEBOOK);
  });
  it("count roles count", () => {
    cy.get('[class="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-bhlhm1-MuiListItem-root"]').should("have.length", 3);
  });

  it("add 3 new role component", () => {
    cy.get("#accessadded").type(noteBook.role1)
    cy.get("#AddUserRoleButton").click({ force: true });
    cy.get("#accessadded").clear().type(noteBook.role2)
    cy.get("#AddUserRoleButton").click({ force: true });
    cy.get("#accessadded").clear().type(noteBook.role3)
    cy.get("#AddUserRoleButton").click({ force: true })
  });
  it("count added roles count", () => {
    cy.get('[class="MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-secondaryAction css-1n8t684-MuiListItem-root"]').should("have.length", 3);
  });

  it("click on GO TO NEXT(USER ROLE form)", () => {
    cy.get("#gotonext_info").click({ force: true });
  });
  it("Should have same url", () => {
    cy.url({ timeout: 35000 }).should("eq", LOCAL_NEW_NOTEBOOK);
  });
});

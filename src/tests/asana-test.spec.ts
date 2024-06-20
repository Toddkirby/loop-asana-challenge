import test, { expect } from "../utils/Fixtures"

const testCases = [
  {
    "id": 1,
    "name": "Test Case 1",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Draft project brief",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  },
  {
    "id": 2,
    "name": "Test Case 2",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Schedule kickoff meeting",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  },
  {
    "id": 3,
    "name": "Test Case 3",
    "leftNav": "Cross-functional project plan, Project",
    "column": "To do",
    "card_title": "Share timeline with teammates",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  },
  {
    "id": 4,
    "name": "Test Case 4",
    "leftNav": "Work Requests",
    "column": "New Requests",
    "card_title": "[Example] Laptop setup for new hire",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  },
  {
    "id": 5,
    "name": "Test Case 5",
    "leftNav": "Work Requests",
    "column": "In Progress",
    "card_title": "[Example] Password not working",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  },
  {
    "id": 6,
    "name": "Test Case 6",
    "leftNav": "Work Requests",
    "column": "Completed",
    "card_title": "[Example] New keycard for Daniela V",
    "email": "ben+pose@workwithloop.com",
    "password": "Password123"
  }
];

test.describe('Asana Data-Driven Tests', () => {
  testCases.forEach((data) => {
    test(data.name, async ({ commonMethods, asanaDashboardPage, asanaLoginPage }) => {
      await test.step('Login to Asana', async () => {
        // Login to Asana
        const email = data.email;
        const password = data.password;
        await commonMethods.login(email, password, asanaLoginPage);
      });

      await test.step('Navigate to the project page', async () => {
        // Navigate to the project page
        await asanaDashboardPage.getWantedProjectLocatorAndClick(data.leftNav);
      });

      await test.step('Verify the card is within the right column', async () => {
        // Verify the card is within the right column
        await asanaDashboardPage.checkForCardInColumn(data.column, data.card_title);
      });
      
    });
  });
});

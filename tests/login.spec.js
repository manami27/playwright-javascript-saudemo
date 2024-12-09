const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/inventory/);
});

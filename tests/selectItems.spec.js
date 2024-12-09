const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");

test("Select 2, 3, and 4 items", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  await inventoryPage.addItemToCart(2);
  expect(await inventoryPage.getCartItemCount()).toBe(2);

  await inventoryPage.clearCart();
  await inventoryPage.addItemToCart(3);
  expect(await inventoryPage.getCartItemCount()).toBe(3);

  await inventoryPage.clearCart();
  await inventoryPage.addItemToCart(4);
  expect(await inventoryPage.getCartItemCount()).toBe(4);
});

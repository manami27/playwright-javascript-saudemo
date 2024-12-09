const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/loginPage");
const InventoryPage = require("../pages/inventoryPage");
const CartPage = require("../pages/cartPage");
const CheckoutPage = require("../pages/checkoutPage");

test("Full purchase flow", async ({ browser }) => {
  //Launch a new browser context and page
  const context = await browser.newContext();
  const page = await context.newPage();

  //Page Objects
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  //Step 1: Login
  console.log("Step 1: Logging in");
  await loginPage.navigate();
  await loginPage.login("standard_user", "secret_sauce");
  await expect(page).toHaveURL(/.*inventory/);

  //Step 2: Add random items to the cart
  console.log("Step 2: Adding items to cart");
  const itemCount = Math.floor(Math.random() * 3) + 2; // Random 2-4 items
  await inventoryPage.addItemToCart(itemCount);
  const cartCount = await inventoryPage.getCartItemCount();
  expect(cartCount).toBe(itemCount);

  //Step 3: Go to Cart
  console.log("Step 3: Navigating to cart");
  await inventoryPage.goToCart();
  await expect(page).toHaveURL(/.*cart/);

  //Step 4: Remove an item
  console.log("Step 4: Removing an item from the cart");
  await cartPage.removeItem();

  //Step 5: Proceed to checkout
  console.log("Step 5: Proceeding to checkout");
  await cartPage.proceedToCheckout();
  await expect(page).toHaveURL(/.*checkout-step-one/);

  //Step 6: Fill form and continue
  console.log("Step 6: Filling the form");
  await checkoutPage.fillForm("Maya", "Maulani", "12345");
  await expect(page).toHaveURL(/.*checkout-step-two/);

  //Step 7: Complete checkout
  console.log("Step 7: Completing the purcase");
  await checkoutPage.completeCheckout();
  await expect(page).toHaveURL(/.*checkout-complete/);
  await expect(page.locator(".complete-header")).toHaveText(
    "Thank you for your order!"
  );

  //Close the browser context
  await context.close();
});

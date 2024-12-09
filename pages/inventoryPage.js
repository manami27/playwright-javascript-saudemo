class InventoryPage {
  constructor(page) {
    this.page = page;
    this.cartBadge = ".shopping_cart_badge";
    this.addToCartButtons = ".inventory_item button";
    this.cartLink = ".shopping_cart_link";
  }

  async addItemToCart(count) {
    const buttons = await this.page.$$(this.addToCartButtons);
    for (let i = 0; i < count; i++) {
      await buttons[i].click();
    }
  }

  async getCartItemCount() {
    const badge = await this.page.locator(this.cartBadge).textContent();
    return parseInt(badge || "0", 10);
  }

  async clearCart() {
    const buttons = await this.page.$$(this.addToCartButtons);
    for (const button of buttons) {
      const buttonText = await button.textContent();
      if (buttonText === "Remove") {
        await button.click();
      }
    }
  }

  async goToCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = InventoryPage;

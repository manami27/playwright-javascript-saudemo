class CartPage {
  constructor(page) {
    this.page = page;
    this.removeButton = ".cart_item button";
    this.checkoutButton = "#checkout";
  }

  async removeItem() {
    const removeButton = this.page.locator(this.removeButton).first();
    if (await removeButton.isVisible()) {
      await removeButton.click();
    }
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}

module.exports = CartPage;

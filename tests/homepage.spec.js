const { test, expect } = require("@playwright/test");
test("home page", async ({ page }) => {
  await page.goto("https://smiledraft-deployment-c93d.vercel.app/");
  const pageTitle =  page.title();
  console.log("the page title is ", pageTitle);
  await expect(page).toHaveTitle("DentalCare");
  await expect(page).toHaveTitle(
    "https://smiledraft-deployment-c93d.vercel.app/",
  );
  await page.close();
});

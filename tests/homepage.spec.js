const { test, expect } = require("@playwright/test");
// test("home page", async ({ page }) => {
//   await page.goto("https://smiledraft-deployment-c93d.vercel.app/");
//   const pageTitle = await page.title();
//   console.log("the page title is ", pageTitle);
//   await expect(page).toHaveTitle("DentalCare");
//   await expect(page).toHaveURL(
//     "https://smiledraft-deployment-c93d.vercel.app/",
//   );
//   await page.close();
// });
test("home page", async ({ page }) => {
  await page.goto("https://smiledraft-deployment-c93d.vercel.app/");
  const pageTitle = await page.title();
  console.log("the page title is ", pageTitle);
});
test("verifying the url", async ({ page }) => {
  await page.goto("https://smiledraft-deployment-c93d.vercel.app/");
  const pageUrl = await page.url();
  console.log("the page url is ", pageUrl);
  await expect(page).toHaveURL(
    "https://smiledraft-deployment-c93d.vercel.app/",
  );
});

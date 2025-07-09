module.exports = async (page) => {
  console.log("🔐 Logging in...");

  await page.goto("http://localhost:3000");

  await page.waitForSelector("input[name='email']");
  await page.type("input[name='email']", "nileshkhochare@gmail.com");

  await page.waitForSelector("input[name='password']");
  await page.type("input[name='password']", "Test@123");

  await page.click("button[type='submit']");

  await page.waitForNavigation({ waitUntil: "networkidle0" });

  // Ensure GPT button is visible
  await page.waitForSelector("[data-testid='gpt-search-button']");
  await page.evaluate(() => {
    document
      .querySelector("[data-testid='gpt-search-button']")
      .scrollIntoView({ behavior: "instant", block: "center" });
  });

  await page.click("[data-testid='gpt-search-button']");
  await page.waitForSelector("[data-testid='gpt-search-ui']");

  console.log("✅ GPT View loaded");
};

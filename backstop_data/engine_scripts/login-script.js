// module.exports = async (page, scenario, vp) => {
//   console.log("👨‍💻 Running login script (Puppeteer)...");

//   await page.waitForSelector("input[name='email']");
//   await page.type("input[name='email']", "nileshkhochare@gmail.com");

//   await page.waitForSelector("input[name='password']");
//   await page.type("input[name='password']", "Test@123");

//   await page.click("button[type='submit']");

//   // ✅ Final fix — wait for page to update
//   await new Promise((resolve) => setTimeout(resolve, 3000));

//   console.log("✅ Login simulation complete.");
// };

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

  console.log("✅ Home Page loaded");
};

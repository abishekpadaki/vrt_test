const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
  });
  await page.goto('https://google.com');
  await page.screenshot({path: 'screenshots/example.png'});

  await browser.close();
  console.log("Screenshot of page 1 captured");
})();
(async () => {
    const browser = await puppeteer.launch();
    
    const page = await browser.newPage();
    await page.setViewport({
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
    });
    await page.goto('https:gmail.com//');
    await page.screenshot({path: 'screenshots/example2.png'});
  
    await browser.close();
    console.log("Screenshot of page 2 captured");
  })();
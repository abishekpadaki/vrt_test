const { toMatchImageSnapshot } = require('jest-image-snapshot');




  expect.extend({ toMatchImageSnapshot });
  
    it('render test-desktop', async () => {
        const page = await browser.newPage();
      await page.goto('https://uat.chrysler.com/universal/protect/access.html');
      await page.waitForSelector("form[name=form]");
      await page.click("input[name=pw]");
    await page.type("input[name=pw]", 'bats1');
    await page.click("input[name=button]");
    await page.waitFor(6000);
        await page.goto(" https://uat.chrysler.com/qaautomation/automationadaption/activevideocontainertest.html");
        
        await page.setViewport({ width: 1440, height: 900});
        await page.waitForSelector("#active_video_1364519483 > div > div > div > div.overlay-wrapper.gcss-theme-dark.active > a > div");
        await page.waitFor(4000)
        await page.click("#active_video_1364519483 > div > div > div > div.overlay-wrapper.gcss-theme-dark.active > a > div");
        await page.waitFor(4000)
        const image = await page.screenshot();
        console.log("Screenshot Taken for Desktop View")
    console.log("Matching Pixels to baseline screenshot...")
        expect(image).toMatchImageSnapshot();
    },35000);



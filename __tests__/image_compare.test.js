const { toMatchImageSnapshot } = require('jest-image-snapshot');




  expect.extend({ toMatchImageSnapshot });
  it('renders correctly-desktop', async () => {
    
    
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    await page.setViewport({ width: 1440, height: 900});

    const image = await page.screenshot();
    console.log("Screenshot Taken for Desktop View")
console.log("Matching Pixels to baseline screenshot...")
    expect(image).toMatchImageSnapshot();
  });

  it('renders correctly-tablet', async () => {
    
    
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    await page.setViewport({ width:768 , height: 1024});

    const image = await page.screenshot();
    console.log("Screenshot Taken for Tablet View")
console.log("Matching Pixels to baseline screenshot...")
    expect(image).toMatchImageSnapshot();
  });

  it('renders correctly-mobile', async () => {
    
    
    const page = await browser.newPage();
    await page.goto("http://localhost:3000");

    await page.setViewport({ width: 411, height: 823});

    const image = await page.screenshot();
    console.log("Screenshot Taken for Mobile View")
console.log("Matching Pixels to baseline screenshot...")
    expect(image).toMatchImageSnapshot();
  });
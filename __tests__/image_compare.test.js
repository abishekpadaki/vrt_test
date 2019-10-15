const { toMatchImageSnapshot } = require('jest-image-snapshot');

  expect.extend({ toMatchImageSnapshot });
  it('renders correctly', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

   

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  });
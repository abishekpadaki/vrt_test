module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.js$',
    launch: {
      headless: true
   },
    browserContext: 'default',
  }
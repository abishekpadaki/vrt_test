module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.test\\.js$',
    launch: {
      headless: false
   },
    browserContext: 'default',
  }
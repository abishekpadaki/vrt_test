function user_input(){
const test_URL="";
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Enter the url: `, (url_name) => {
  console.log(`You Entered the URL: ${url_name}!`)
  test_URL=url_name;
  readline.close()
})
return test_URL;
}

export default user_input;

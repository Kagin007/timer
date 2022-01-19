const stdin = process.stdin;

let returnFunction = (returnVal) => {
  return returnVal;
}

stdin.resume ();
stdin.on('data', (key) => {
  if(key.toString().trim() == 'b'){
    process.stdout.write('\x07')
  }  
  if(Number(key) < 10){
    setTimeout( () => {
      process.stdout.write('\x07')},
      Number(key)*1000)
  }
})

process.on("SIGINT", () => {
  console.log("\nThanks for using me, ciao!")  
  process.exit();
});
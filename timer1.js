const userInput = process.argv.splice(2)

const timer = (userInput) => {
  for (let time of userInput) {
    if (time > 0 || NaN === time) {
    setTimeout( () => {
      process.stdout.write('\x07');      
    }, time*1000)    
    };        
  };
};

timer(userInput)
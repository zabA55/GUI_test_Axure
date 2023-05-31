const arg = process.argv.splice(2);
const command = arg[0].split('=')
const name = command[1];
const sizeCommand = arg[1].split('=')
const size = sizeCommand[1];

console.log(`Przygotowuję ${name} o pojemności ${size} ml`)
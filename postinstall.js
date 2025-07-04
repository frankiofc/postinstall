const chalk = require("chalk");

console.log(chalk.cyanBright(`
╔══╦═╦══╦═╦╦╦╦══╗
║═╦╣╬║╔╗║║║║╔╩║║╝
║╔╝║╗╣╠╣║║║║╚╦║║╗
╚╝─╚╩╩╝╚╩╩═╩╩╩══╝
╔╗╔╗╔╦╦══╦═╦╦═╗
╚╗╔╝║╔╩║║╣║║║╦╝
╔╝╚╗║╚╦║║╣║║║╩╗
╚╝╚╝╚╩╩══╩╩═╩═╝
`));

console.log(chalk.greenBright(` 
  ${chalk.bold("Thanks for installing our Script!")}
  Follow us: ${chalk.underline("github.com/frankiofc")}
`));

console.log(chalk.yellowBright(`
  ${chalk.bold("Get started with our bot by typing 'menu'")}
  ${chalk.bold("Have fun and enjoy our bot!")}
`));

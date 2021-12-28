#!/usr/bin/env node

const welcome = require("cli-welcome");
const colors = require("colors");
const pkgJSON = require("./package.json");
const log = console.log;

welcome({
  title: pkgJSON.description,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
  version: pkgJSON.version,
});

log(`
${colors.cyan.bold(`Samrath Chadha`)} - ${colors.dim.italic(`ssamrxth`)}

${colors.dim(
  `Python and Typescript developer!\nCo-founder of InternNova and creator of kyoto.nvim and a firm believer in the power of code(and open source).`
)}

🐦 ${colors.blue.bold(`Twitter:`)}  ${colors.dim(
  `https://twitter.com/ssamrxth`
)}
💻 ${colors.blue.bold(`GitHub:`)}   ${colors.dim(`https://github.com/ssamrxth`)}
🧐 ${colors.blue.bold(`LinkedIn:`)} ${colors.dim(
  `https://www.linkedin.com/in/samrathchadha/`
)}
📧 ${colors.bold(`Email:`)}    ${colors.dim(`samrath.2757@gmail.com`)}

`);

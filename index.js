var {prompt} = require('inquirer');
var { questions, mdGen } = require('./utils');

  prompt(questions).then(mdGen);
  
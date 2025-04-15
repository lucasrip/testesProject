
const actions = require('./actions.js');
const prompts = require("./prompts.js");

module.exports = function (plop)
{
  plop.setGenerator('generators', {
    description: 'generetor templates',
    prompts,
    actions,
     
  });

}


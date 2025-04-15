const generateProcessReturn = require("../utils/generateProcessReturn");

const components =require("./components");
const hooks =require("./hooks");
const pages =require("./pages");

const templetesProcess = [components,pages,hooks]

   
module.exports = (values)=> {
  return generateProcessReturn(values,templetesProcess,"templates").templates;
};

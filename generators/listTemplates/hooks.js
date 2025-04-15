   const generateProcessReturn = require("../utils/generateProcessReturn");
   const simple  = ({directory,folderName,teste,route})=>{
    return {
    simple:  [
      {
        type: 'add',
        path: `../src/${directory}/${folderName}/index.ts`,
        templateFile: 'templates/hooks/simple/index.ts.hbs',
      }
     ]
    }
   }
  

  const hooksProcesses = [simple]
  module.exports = (values)=> generateProcessReturn(values,hooksProcesses,"hooks");
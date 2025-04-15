   const generateProcessReturn = require("../utils/generateProcessReturn");
 

  const simple =({directory,folderName,teste,route})=>{

   
    return {
      simple : [
      {
        type: 'add',
        path: `../src/${directory}/${folderName}/index.tsx`,
        templateFile: 'templates/components/simple/index.tsx.hbs',
      },
      {
        type: 'add',
        path: `../src/${directory}/${folderName}/styles.ts`,
        templateFile: 'templates/components/simple/styles.ts.hbs',
      },
      {
        type: 'add',
        path: `../src/${directory}/${folderName}/index.spec.jsx`,
        templateFile: 'templates/components/simple/index.spec.jsx.hbs',
        skip:()=>teste?.includes('no')&&"no file teste"
      }
     ]
    };
  }

  
    const componentsProcesses = [simple]
 
  
  module.exports = (values)=> generateProcessReturn(values,componentsProcesses,"components");
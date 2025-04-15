   const generateProcessReturn = require("../utils/generateProcessReturn");
  const  modifyRoutesAction  = require("../utils/modifyRoutesAction")

  const customActions = (route)=> [...modifyRoutesAction(route)]

  const simple = ({directory,folderName,teste,route})=>{
    return {
      simple : [
        {
          type: 'add',
          path: `../src/${directory}/${folderName}/index.tsx`,
          templateFile: 'templates/pages/simple/index.tsx.hbs',
        },
        {
          type: 'add',
          path: `../src/${directory}/${folderName}/styles.ts`,
          templateFile: 'templates/pages/simple/styles.ts.hbs',
        },
        {
          type: 'add',
          path: `../src/${directory}/${folderName}/index.spec.jsx`,
          templateFile: 'templates/pages/simple/index.spec.jsx.hbs',
          skip:()=>teste?.includes('no')&&"no file teste"
        },
        ...customActions(route)
]
    }
  }

  
  

  const teste =({directory,folderName,teste,route})=>{
  return {
    teste:
    [{
    type: 'add',
    path: `../src/${directory}/${folderName}/index.tsx`,
    templateFile: 'templates/pages/testeContainer/index.tsx.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/styles.ts`,
    templateFile: 'templates/pages/testeContainer/styles.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/imports.ts`,
    templateFile: 'templates/pages/testeContainer/imports.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/componentContainerProps/projectFiles.ts`,
    templateFile: 'templates/pages/testeContainer/componentContainerProps/projectFiles.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/componentContainerProps/references.ts`,
    templateFile: 'templates/pages/testeContainer/componentContainerProps/references.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/componentContainerProps/sections.ts`,
    templateFile: 'templates/pages/testeContainer/componentContainerProps/sections.ts.hbs',
  },
  {
    type: 'add',
    path: `../src/${directory}/${folderName}/index.spec.jsx`,
    templateFile: 'templates/pages/testeContainer/index.spec.jsx.hbs',
     skip:()=>teste?.includes('no')&&"no file teste"
  },
   ...customActions(route)
]
  
  }  
  }

const pagesProcesses = [simple,teste]
  
  
  module.exports = (values)=> generateProcessReturn(values,pagesProcesses,"pages");
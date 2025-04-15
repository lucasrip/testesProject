const templates = require("./listTemplates/index")
 function actions(values)
{
  const {directory,name,type} =values;
  const equalsTemplate = ['components', 'pages'];
  const verifyDirectory = equalsTemplate.some(element => element === directory);
  const folderName = verifyDirectory? name[0].toUpperCase() + name.slice(1).toLowerCase() : name.toLowerCase(); 
  
  const templateValues ={
    ...values,
    folderName
  }
  const templateItems = templates(templateValues);

  const actionSelecioned = templateItems[directory][type];
  return actionSelecioned;

}

module.exports = actions
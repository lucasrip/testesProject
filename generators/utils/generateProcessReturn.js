 function generateProcessReturn(values,listProcesses,name)
  {
    const processes = listProcesses.map(option =>option(values)).reduce((cc,item)=>{
     const metodo = Object.entries(item)[0];
     const indexName = metodo[0];
     const metodoValue =metodo[1];
     cc[indexName] =  metodoValue;
      return cc 
    },{});
   
  
   return {[name] :processes}
   
  }

  module.exports = generateProcessReturn
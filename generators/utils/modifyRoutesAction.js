   const path = require("path");
 
   const urlFromTypeOfRoutes ={
    public:"src/routes/public/links.tsx",
    development:"src/routes/devMode/links.tsx"
   }
 
 const modifyRoutesAction = (route="public")=> [
      {
        type: "modify",
        path: path.join(process.cwd(), urlFromTypeOfRoutes[route]),
        pattern:/(?=\n\])/  , 
        template:
          '\n{\n   name: "{{name}}",\n link: "/{{pascalCase link}}",\n description: "{{description}}",\n   element: <{{pascalCase name}} />,\n  },\n',
          
        },
      
      {
        type: "modify",
        path: path.join(process.cwd(), urlFromTypeOfRoutes[route]),
        pattern: /(import InteractiveMap.*;)/, 
        template:
          '$1\nimport {{pascalCase name}} from "../../pages/{{pascalCase name}}/index";',
      },
    ];

    module.exports = modifyRoutesAction;
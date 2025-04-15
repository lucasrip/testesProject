const pages = ['simple','teste'];
const hooks = ['simple']
const components = ['simple']

const directoryType = ['components','pages','hooks']

const directorysChoices ={
  pages,
  components,
  hooks
}

const directorys = directoryType.map(item =>{
  return {
        
        type: 'list',
        name: 'type',
        message: `what type of ${item} you want create`,
        choices: directorysChoices[item],
        when:({directory})=>directory.includes(item),
      }
})

const prompts = [
      {
        type: 'list',
        name: 'directory',
        message: 'what do you want create',
        choices: directoryType
      },
    ...directorys,  
      {
        type: 'input',
        name: 'name',
        message: 'What is the name ?'
      },
       {
        type: 'list',
        name: 'teste',
        message: 'you want a test file',
        choices: ["yes","no"],
        when:({directory})=> directory === "pages" || directory === "components"
      },
         {
        type: 'list',
        name: 'route',
        message: 'what type route this page is',
        choices: ["public","devlopment"],
        when:({directory})=> directory === "pages"
      },
      {
        type: 'input',
        name: 'link',
        message: 'what is the link from your page',
        when:({directory})=> directory === "pages"
      },
      {
        type: 'input',
        name: 'description',
        message: 'what is the description from your page',
        when:({directory})=> directory === "pages"
      },
    ]
   
  
module.exports = prompts 

export interface Project
{
    name: string;
    description: string;
    imgs :{
      link: string;
      description: string;
    }[];
    projectBuild:{
      name: string;    
      description: string;          
      link: string;     
     }[];
    stack:string[];
}
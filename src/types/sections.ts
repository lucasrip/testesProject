import { Project } from './project';

export interface Isections
{
    titleObj:{
      title:string,
      icon: string,
    },
    typeFormat:'web'|'mobile'|'document',
    data:Project[] ,
    description: string,
}
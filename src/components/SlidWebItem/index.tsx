import { useState } from 'react';
import { Project } from '../../types/project';
import { WebItem } from './styles';

interface ISlidWebItem
{
  handleOpenModal: (project:Project)=> void
  project:Project
}

export default function SlidWebItem({project,handleOpenModal}:ISlidWebItem)
{
  const [ isLoading , setIsLoading] = useState(false);

  return(
    <WebItem 
      onClick={() =>  isLoading&&handleOpenModal(project) }  
      className={`${!isLoading&&'skeleton'}`}
    >
      {
        isLoading&& 
          <span>
            <strong>
              { project.name}
            </strong>
          </span>
      }
      <img 
        src={project.imgs[0].link} 
        alt={project.imgs[0].description} 
        title={project.imgs[0].description} 
        onLoad={()=>setIsLoading(true)}
      />
   
    </WebItem>
  ); 

}
import { useState } from 'react';
import { Project } from '../../types/project';
import { MobileItem } from './styles';

interface ISlidMobileItem
{
  handleOpenModal: (project:Project)=> void
  project:Project
}

export default function SlidMobileItem({project,handleOpenModal}:ISlidMobileItem)
{
  const [ isLoading , setIsLoading] = useState(false);

  return(
    <MobileItem
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
   
    </MobileItem>
  ); 

}
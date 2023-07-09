import { Project } from '../../types/project';
import { ApiItem } from './styles';

interface ISlidWebItem
{
  project:Project
}

export default function SlidWebItem({project}:ISlidWebItem)
{

  return(
    <ApiItem  >
      <span>
        <strong>
          { project.name}
        </strong>
      </span>
  
   
    </ApiItem>
  ); 

}
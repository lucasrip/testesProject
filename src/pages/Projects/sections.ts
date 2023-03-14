import { deviceIcons } from '../../exportAssets/devicesIcons';
import mobile from '../../projectsExports/mobile/mobile';
import web from '../../projectsExports/web/web';

export const sections = [
  {
    titleObj:{
      title:'Web',
      icon: deviceIcons.web,
    },
    data: web,
    description: 'seção para os projetos Front end Web',
  },
  {
    titleObj:{
      title:'Mobile',
      icon: deviceIcons.mobile,
    },
    data: mobile,
    description: 'seção para os projetos Front end Mobile',
    imgConfig:{
      width:'13rem',
      height:'25rem',
    },
  },
];
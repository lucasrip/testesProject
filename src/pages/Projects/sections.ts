import { deviceIcons } from '../../exportAssets/devicesIcons';
import mobile from '../../projectsExports/mobile/mobile';
import web from '../../projectsExports/web/web';
import { Isections } from '../../types/sections';

export const sections:Isections[] = [
  {
    titleObj:{
      title:'Web',
      icon: deviceIcons.web,
    },
    typeFormat:'web',
    data: web,
    description: 'seção para os projetos Web',
  },
  {
    titleObj:{
      title:'mobile',
      icon: deviceIcons.mobile,
    },
    typeFormat:'mobile',
    data: mobile,
    description: 'seção para os projetos Mobile',
  },
  // {
  //   titleObj:{
  //     title:'backend',
  //     icon: deviceIcons.mobile,
  //   },
  //   typeFormat:'document',
  //   data: mobile,
  //   description: 'seção para os projetos de back end',
  // },
];
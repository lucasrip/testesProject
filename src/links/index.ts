import privateLinks from './private/links';
import publicLinks from './public/links';
import { Ilinks } from './../types/links';

const localCase = document.URL.includes('http://localhost')
  ? 'development'
  : 'production';

const developmentlinks = localCase === 'development' ? privateLinks : [];

const links: Ilinks[] = [...publicLinks, ...developmentlinks];

export default links;

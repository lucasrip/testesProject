import devMode from './devMode/links';
import publicLinks from './public/links';
import { Ilinks } from '../types/links';

const developmentLinks = document.URL.includes('http://localhost')
  ? devMode
  : [];

const links: Ilinks[] = [...publicLinks, ...developmentLinks];

export default links;

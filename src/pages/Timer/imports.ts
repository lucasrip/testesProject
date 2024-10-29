import startIcon from '../../assets/timer/go.svg';
import stopIcon from '../../assets/timer/stop.svg';
import resetIcon from '../../assets/timer/reset.svg';
import { Tassets } from '../../types/assets';

const timerAssets: Tassets = {
  startIcon: {
    name: 'start',
    type: 'svg',
    url: startIcon,
  },
  stopIcon: {
    name: 'stop',
    type: 'svg',
    url: stopIcon,
  },
  resetIcon: {
    name: 'reset',
    type: 'svg',
    url: resetIcon,
  },
};

export default timerAssets;

import vscodeIcon from '../../assets/tec/vscode.svg';
import closeIcon from '../../assets/hilighter/close.svg';
import copyIcon from '../../assets/hilighter/copy.svg';
import copyedIcon from '../../assets/hilighter/copyed.svg';
import fileIcon from '../../assets/hilighter/file.svg';
import zipIcon from '../../assets/hilighter/zip.svg';

import { Tassets } from '../../types/assets';

const hilighterAssets: Tassets = {
  vscodeIcon: {
    name: 'vscode',
    type: 'svg',
    url: vscodeIcon,
  },
  closeIcon: {
    name: 'closeIcon',
    type: 'svg',
    url: closeIcon,
  },
  copyIcon: {
    name: 'copy',
    type: 'svg',
    url: copyIcon,
  },
  copyedIcon: {
    name: 'copyed',
    type: 'svg',
    url: copyedIcon,
  },
  fileIcon: {
    name: 'file',
    type: 'svg',
    url: fileIcon,
  },
  zipIcon: {
    name: 'zip',
    type: 'svg',
    url: zipIcon,
  },
};

export default hilighterAssets;

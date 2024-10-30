import { Tassets } from './assets';
import { fileType } from './filesTypes';
import { folderType } from './folderTpe';

export default interface Ihiliter {
  folderDowloadName?: string;
  projectFiles?: {
    url: string;
    name: string;
    type: fileType;
  }[];
  assets?: Tassets;
}

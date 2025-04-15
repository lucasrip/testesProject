import { Tassets } from './assets';
import { fileType } from './filesTypes';

export interface Ihiliter {
  folderDowloadName?: string;
  projectFiles?: TprojectFiles;
  assets?: Tassets;
}

export type TprojectFiles = {
  url: string;
  name: string;
  type: fileType;
}[];

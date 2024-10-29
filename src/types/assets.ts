import { fileType, TassetsType } from "./filesTypes";

export type TdowloadAssets = {
  name: string;
  type: TassetsType | fileType;
  url: string;
}[];

export type Tassets = {
  [key: string]: {
    name: string;
    type: TassetsType;
    url: string;
  };
};

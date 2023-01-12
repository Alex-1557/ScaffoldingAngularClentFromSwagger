export interface AddMasternodeInfo_Post {
  toVm: number;
  toVmUser: number;
  toUser: number;
  toCoin: number;
  configPath: string;
  statusCommand: string;
  config: string;
  comment: string;
}
export interface DelMasternodeInfo_Get {
  MasternodeI: number;
}
export interface GetMasternodeInfo_Get {
}

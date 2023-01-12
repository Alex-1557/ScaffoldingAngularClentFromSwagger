export interface GetVmMasternodes_Post {
  serverI: number;
  serverDecryptPass: string;
  userName: string;
}
export interface UpdateVmMasternodeInfo_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
  vmConnectionAdminDecryptPass: string;
  masternodeI: number;
}
export interface UpdateAllVmMasternodesInfo_Post {
  serverI: number;
  serverDecryptPass: string;
  vmConnectionAdminDecryptPass: string;
}

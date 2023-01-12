export interface GetVmInfo_Get {
  VmI: number;
}
export interface GetVmList_Get {
  ServerI: number;
}
export interface GetVmListInfo_Get {
  ServerI: number;
}
export interface GetVmListRuntime_Get {
  ServerI: number;
  ServerDecryptPass: string;
}
export interface DeleteVm1_FromServer_Post {
  serverI: number;
  serverDecryptPass: string;
  vmI: number;
  removeAllStorage: boolean;
}
export interface DeleteVm2_FromDb_Post {
  serverI: number;
  serverDecryptPass: string;
  vmI: number;
  removeAllStorage: boolean;
}
export interface DumpXmlVm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
}
export interface ListVmDiskByKvm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
}
export interface ChangeSshVmIpDb_Post {
  vmName: string;
  mainIp: string;
  kvmBridgeName: string;
}
export interface UpdateVmInfo_Post {
  serverI: number;
  serverDecryptPass: string;
  vmI: number;
  vmConnectionAdminDecryptPass: string;
}
export interface UpdateAllVmInfo_Post {
  serverI: number;
  serverDecryptPass: string;
  vmConnectionAdminDecryptPass: string;
}
export interface BashForEachVm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmConnectionAdminDecryptPass: string;
  bashCmd: string;
  useAdminLogin: boolean;
  addSudo: boolean;
}
export interface LoadFile_Post {
  vmName: string;
  vmConnectionAdminDecryptPass: string;
  tableName: string;
  fileName: string;
  columnName: string;
  recordNum: number;
}

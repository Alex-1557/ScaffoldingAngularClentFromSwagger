export interface DeployVM_Post {
  toCoin: number;
  serverI: number;
  serverDecryptPass: string;
}
export interface AbortDeployVM_Get {
}
export interface GetCurrentDeploymentLog_Get {
}
export interface GetCurrentDeploymentState_Get {
}
export interface SelectPartitionToDeploy1_Post {
  serverI: number;
  serverDecryptPass: string;
  toCoin: number;
}
export interface AllocatePartition2_Post {
  freePart: undefined;
  serverI: number;
  serverDecryptPass: string;
  toCoin: number;
}
export interface CopyTemplate2_Post {
  serverI: number;
  serverDecryptPass: string;
  coinName: string;
  kvmDevice: string;
}
export interface SetUpIpName3_Post {
  serverI: number;
  serverDecryptPass: string;
  kvmDevice: string;
  userName: string;
  password: string;
  ipConfigJsonParameters: string;
}
export interface SetUpMasternode4_Post {
  serverI: number;
  serverDecryptPass: string;
  kvmDevice: string;
  coinName: string;
  configPath: string;
  statusCommand: string;
  config: string;
}
export interface BuildXmlVmConfig5_Post {
  name: string;
  uuid: string;
  diskDevice: string;
  cpuSet: string;
  cpuCount: number;
  memory: number;
  mac: string;
  spicePort: number;
  bridgeName: string;
}
export interface AddVmToKvm6_Post {
  serverI: number;
  serverDecryptPass: string;
  xmlVmConfig: string;
}
export interface AddVmToDb7_Post {
  serverI: number;
  serverDecryptPass: string;
  toUser: number;
  vmName: string;
}
export interface AddMasterNodeToDb8_Post {
  toVm: number;
  toVmUser: number;
  toUser: number;
  toCoin: number;
  configPath: string;
  statusCommand: string;
  config: string;
  comment: string;
}

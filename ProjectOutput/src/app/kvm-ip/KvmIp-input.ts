export interface GetRuntimeBridgeList_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface GetRuntimeBridgePorts_Post {
  serverI: number;
  serverDecryptPass: string;
  bridgeName: string;
}
export interface GetRuntimeRoute_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface GetIpConfig_Post {
  serverI: number;
  serverDecryptPass: string;
  configName: string;
}
export interface GetUfwRules_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface GetRuntimeIpList_Post {
  serverI: number;
  serverDecryptPass: string;
}

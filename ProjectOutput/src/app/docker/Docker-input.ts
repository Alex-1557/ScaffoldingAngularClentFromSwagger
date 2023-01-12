export interface GetDockerHostList_Get {
}
export interface GetDockerHubDbInfo_Get {
  I: number;
}
export interface UpdateDockerHubDbConfigInfo_Post {
  dockerHubI: number;
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
}
export interface GetDockerHubRuntimeInfo_Post {
  dockerHubI: number;
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
}
export interface UpdateDockerHubInfo_Post {
  dockerHubI: number;
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
}
export interface GetDockerServiceLog_Post {
  dockerHubI: number;
  vmConnectionAdminDecryptPass: string;
  readRecords: number;
}
export interface GetDockerInfo_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface GetDockerEvents_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface DeleteDockerHubFromDb_Post {
  dockerHubI: number;
  vmConnectionAdminDecryptPass: string;
}
export interface AddDockerHubInfoToDb_Post {
  newDockerJsonInfo: string;
}

export interface GetRegistryList_Get {
}
export interface GetRegistryReportFromDb_Get {
}
export interface AddRegistryInfoToDb_Post {
  toDockerRegistry: number;
  toCoin: number;
  registryImageName: string;
  tag: string;
  digest: string;
  manifestContent: string;
}
export interface GetRegistryImageList_Get {
  toDockerRegistry: number;
}
export interface DeleteRegistryImageFromDb_Get {
  toDockerRegistry: number;
  ImageName: string;
}
export interface GetRegistryRuntimeCatalog_Post {
  dockerRegistryVmI: number;
  dockerRegistryDecryptPass: string;
}
export interface GetRegistryRuntimeTagList_Post {
  dockerRegistryVmI: number;
  dockerRegistryDecryptPass: string;
  repository: string;
}
export interface GetRegistryRuntimeManifestAndDigest_Post {
  dockerRegistryVmI: number;
  dockerRegistryDecryptPass: string;
  repository: string;
  tag: string;
}
export interface GetRegistryRuntimeFullContent_Post {
  dockerRegistryVmI: number;
  dockerRegistryDecryptPass: string;
}
export interface UpdateRegistryDbFromRuntime_Post {
  dockerRegistryVmI: number;
  dockerRegistryDecryptPass: string;
}
export interface AddNewRegistryServerToDb_Post {
  AddNewRegistryServerToDbRequest: object;
}
export interface LoadRegistryImageToDb_Post {
  LoadRegistryImageToDbRequest: object;
}

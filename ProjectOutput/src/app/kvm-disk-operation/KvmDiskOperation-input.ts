export interface DeletePartitionFromServer_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
  partitionNumber: number;
}
export interface DeletePartitionFromDB_Get {
  PartitionI: number;
}
export interface DeleteVolumeFromDB_Post {
  path: string;
  withKvmDevicePartition: boolean;
}
export interface AddPartitionToServer_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
  startTrack: number;
  endTrack: number;
}
export interface AddPartitionToDB_Post {
  toKvmStorageDevice: number;
  toKvmLvmDevice: number;
  name: string;
  type: string;
  uuid: string;
  partUUID: string;
  ptType: string;
  partLabel: string;
  blockSize: number;
  size: string;
  start: number;
  end: number;
  sectors: number;
  isKvmInternal: number;
  toVmSpecial: number;
  toVm: number;
  isBootable: number;
  currentState: string;
}
export interface FormatPartition_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
}
export interface ListDevicePartition_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
}
export interface GetFreeDevicePartitionName_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
}
export interface ListDiskDevice_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface ListLvmDevice_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface ListLvmMember_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
}
export interface UpdatePartitionInDB_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface ListDirectory_Post {
  serverI: number;
  serverDecryptPass: string;
  directory: string;
}
export interface GetServerPartitions_Get {
  ServerI: number;
}
export interface GetFreeServerPartitions_Get {
  ServerI: number;
  GapOnly: boolean;
  OneDeviceOnly: string;
}
export interface AddKvmVolumeToServer_Post {
}
export interface AddKvmVolumeToDb_Post {
}
export interface SyncKvmVolume_Post {
}
export interface KvmStorageList_Post {
}
export interface KvmVmPoolList_Post {
}

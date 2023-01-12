export interface ZipPartition_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
  isoImageFileName: string;
}
export interface ListPartitionImages_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface ListPartitionImagesFromDB_Get {
}
export interface SyncPartitionImages_Post {
  serverI: number;
  serverDecryptPass: string;
}
export interface UnZipPartition_Post {
  serverI: number;
  serverDecryptPass: string;
  serverDevice: string;
  isoImageFileName: string;
}

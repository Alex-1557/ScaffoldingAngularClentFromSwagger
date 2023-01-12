export interface AddBashJob_Post {
  toServer: number;
  toVm: number;
  sshDecryptPass: string;
  subscribeId: string;
  toUser: number;
  command: string;
  comment: string;
}
export interface BashJobFinished_Post {
  i: number;
  crDate: string;
  toServer: number;
  toVm: number;
  toUser: number;
  command: string;
  subscribeId: string;
  comment: string;
  lastUpdate: string;
}
export interface FlushAllNotificationForOneUser_Get {
  UserID: number;
}
export interface FlushNotification_Get {
}
export interface ListNotificationCacheWaitingToSendToSubscriber_Get {
}
export interface ListAllClientConnectionToHub_Get {
}
export interface NotificationCacheState_Get {
}
export interface NotifyAllClientsSRV_Get {
}
export interface NotifyOneClientSRV_Get {
  ConnectionID: string;
}
export interface NotifyAllClientsTST_Get {
}
export interface NotifyOneClientTST_Get {
  ConnectionID: string;
}
export interface ListAllDockerEventsConnectionToHub_Get {
}
export interface NotifyAllDockerEventsClientsTST_Get {
}
export interface NotifyOneDockerEventsClientTST_Get {
  ConnectionID: string;
}
export interface ContainerStart_Get {
  ID: string;
  name: string;
  Time: string;
  N: number;
}
export interface ContainerStop_Get {
  ID: string;
  name: string;
  Time: string;
  N: number;
}

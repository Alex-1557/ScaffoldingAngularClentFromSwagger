export interface StartContainerRaw_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
  vmConnectionAdminDecryptPass: string;
  bashCmd: string;
  addSudoPass: boolean;
}
export interface StartMasterNodeContainerByBash_Post {
  vmConnectionAdminDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  name: string;
  externalIP: string;
  port: number;
  exposePort: number;
  privKey: string;
  txIndex: number;
  seedNode: string;
}
export interface CreateContainerByDockerRaw_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  jsonParameters: string;
}
export interface CreateContainerByDocker_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  hostname: string;
  domainname: string;
  user: string;
  attachStdin: boolean;
  attachStdout: boolean;
  attachStderr: boolean;
  tty: boolean;
  stdinOnce: boolean;
  networkDisabled: boolean;
  env: string;
  cmd: string;
  entrypoint: string;
  image: string;
  labels: string;
  volumes: object;
  workingDir: string;
  macAddress: string;
  exposedPorts: object;
  hostConfig: undefined;
}
export interface StartContainerByDocker_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  containerID: string;
}
export interface StopContainerByDocker_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  containerID: string;
}
export interface RestartContainerByDocker_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  containerID: string;
}
export interface RemoveContainerByDocker_Post {
  vmConnectionAdminDecryptPass: string;
  dockerHubDecryptPass: string;
  toDockerHub: number;
  toDockerRegistry: number;
  toCoin: number;
  toUser: number;
  containerID: string;
}
export interface ReadContainerLogByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
  containerID: string;
}
export interface ListAllContainersByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface ListRunningContainersByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface InspectContainerByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
  containerID: string;
}
export interface ListContainerProcessesByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
  containerID: string;
}
export interface ListImagesByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface ListVolumesByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
}
export interface AttachToContainerByDocker_Post {
  dockerHubI: number;
  dockerHubDecryptPass: string;
  containerID: string;
  cmd: string;
}

export interface Bash_Post {
  vmName: string;
  vmConnectionAdminDecryptPass: string;
  bashCmd: string;
  addSudo: boolean;
  useAdminLogin: boolean;
}
export interface BashByKvm_Post {
  vmName: string;
  vmConnectionAdminDecryptPass: string;
  bashCmd: string;
  addSudo: boolean;
  useAdminLogin: boolean;
}
export interface VmStartByKvm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
}
export interface VmStopByBash_Post {
  vmConnectionAdminDecryptPass: string;
  vmName: string;
}
export interface VmStopByKvm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
}
export interface VmRebootByBash_Post {
  vmConnectionAdminDecryptPass: string;
  vmName: string;
}
export interface VmRebootByKvm_Post {
  serverI: number;
  serverDecryptPass: string;
  vmName: string;
}

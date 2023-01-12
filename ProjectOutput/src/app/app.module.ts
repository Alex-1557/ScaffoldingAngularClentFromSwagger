import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AesComponent } from './aes/aes.component';
import { ContainerComponent } from './container/container.component';
import { DbMasternodeComponent } from './db-masternode/db-masternode.component';
import { DockerComponent } from './docker/docker.component';
import { KvmDeployVmComponent } from './kvm-deploy-vm/kvm-deploy-vm.component';
import { KvmDiskOperationComponent } from './kvm-disk-operation/kvm-disk-operation.component';
import { KvmInfoComponent } from './kvm-info/kvm-info.component';
import { KvmIpComponent } from './kvm-ip/kvm-ip.component';
import { KvmOperationComponent } from './kvm-operation/kvm-operation.component';
import { KvmVmComponent } from './kvm-vm/kvm-vm.component';
import { NotificationComponent } from './notification/notification.component';
import { RegistryComponent } from './registry/registry.component';
import { UsersComponent } from './users/users.component';
import { VmImageComponent } from './vm-image/vm-image.component';
import { VmMasternodeComponent } from './vm-masternode/vm-masternode.component';
import { VmOperationComponent } from './vm-operation/vm-operation.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
import { LoginComponent } from './login/login.component';
import { AuthInterceptor } from './login/auth.interceptor';
import { AesNetCryptComponent } from './aes/Aes-NetCrypt';
import { AesNetDeCryptComponent } from './aes/Aes-NetDeCrypt';
import { AesSqlCryptComponent } from './aes/Aes-SqlCrypt';
import { AesSqlDeCryptComponent } from './aes/Aes-SqlDeCrypt';
import { AesUpdateDecryptedPassComponent } from './aes/Aes-UpdateDecryptedPass';
import { AesCheckDecryptPassComponent } from './aes/Aes-CheckDecryptPass';
import { AesGetRandomPasswordComponent } from './aes/Aes-GetRandomPassword';
import { AesGetRandomNameComponent } from './aes/Aes-GetRandomName';
import { ContainerStartContainerRawComponent } from './container/Container-StartContainerRaw';
import { ContainerStartMasterNodeContainerByBashComponent } from './container/Container-StartMasterNodeContainerByBash';
import { ContainerCreateContainerByDockerRawComponent } from './container/Container-CreateContainerByDockerRaw';
import { ContainerCreateContainerByDockerComponent } from './container/Container-CreateContainerByDocker';
import { ContainerStartContainerByDockerComponent } from './container/Container-StartContainerByDocker';
import { ContainerStopContainerByDockerComponent } from './container/Container-StopContainerByDocker';
import { ContainerRestartContainerByDockerComponent } from './container/Container-RestartContainerByDocker';
import { ContainerRemoveContainerByDockerComponent } from './container/Container-RemoveContainerByDocker';
import { ContainerReadContainerLogByDockerComponent } from './container/Container-ReadContainerLogByDocker';
import { ContainerListAllContainersByDockerComponent } from './container/Container-ListAllContainersByDocker';
import { ContainerListRunningContainersByDockerComponent } from './container/Container-ListRunningContainersByDocker';
import { ContainerInspectContainerByDockerComponent } from './container/Container-InspectContainerByDocker';
import { ContainerListContainerProcessesByDockerComponent } from './container/Container-ListContainerProcessesByDocker';
import { ContainerListImagesByDockerComponent } from './container/Container-ListImagesByDocker';
import { ContainerListVolumesByDockerComponent } from './container/Container-ListVolumesByDocker';
import { ContainerAttachToContainerByDockerComponent } from './container/Container-AttachToContainerByDocker';
import { DatacenterAddServerComponent } from './datacenter/Datacenter-AddServer';
import { DatacenterDelServerComponent } from './datacenter/Datacenter-DelServer';
import { DatacenterUpdServerComponent } from './datacenter/Datacenter-UpdServer';
import { DbMasternodeAddMasternodeInfoComponent } from './db-masternode/DbMasternode-AddMasternodeInfo';
import { DbMasternodeDelMasternodeInfoComponent } from './db-masternode/DbMasternode-DelMasternodeInfo';
import { DbMasternodeGetMasternodeInfoComponent } from './db-masternode/DbMasternode-GetMasternodeInfo';
import { DockerGetDockerHostListComponent } from './docker/Docker-GetDockerHostList';
import { DockerGetDockerHubDbInfoComponent } from './docker/Docker-GetDockerHubDbInfo';
import { DockerUpdateDockerHubDbConfigInfoComponent } from './docker/Docker-UpdateDockerHubDbConfigInfo';
import { DockerGetDockerHubRuntimeInfoComponent } from './docker/Docker-GetDockerHubRuntimeInfo';
import { DockerUpdateDockerHubInfoComponent } from './docker/Docker-UpdateDockerHubInfo';
import { DockerGetDockerServiceLogComponent } from './docker/Docker-GetDockerServiceLog';
import { DockerGetDockerInfoComponent } from './docker/Docker-GetDockerInfo';
import { DockerGetDockerEventsComponent } from './docker/Docker-GetDockerEvents';
import { DockerDeleteDockerHubFromDbComponent } from './docker/Docker-DeleteDockerHubFromDb';
import { DockerAddDockerHubInfoToDbComponent } from './docker/Docker-AddDockerHubInfoToDb';
import { KvmDeployVmDeployVMComponent } from './kvm-deploy-vm/KvmDeployVm-DeployVM';
import { KvmDeployVmAbortDeployVMComponent } from './kvm-deploy-vm/KvmDeployVm-AbortDeployVM';
import { KvmDeployVmGetCurrentDeploymentLogComponent } from './kvm-deploy-vm/KvmDeployVm-GetCurrentDeploymentLog';
import { KvmDeployVmGetCurrentDeploymentStateComponent } from './kvm-deploy-vm/KvmDeployVm-GetCurrentDeploymentState';
import { KvmDeployVmSelectPartitionToDeploy1Component } from './kvm-deploy-vm/KvmDeployVm-SelectPartitionToDeploy1';
import { KvmDeployVmAllocatePartition2Component } from './kvm-deploy-vm/KvmDeployVm-AllocatePartition2';
import { KvmDeployVmCopyTemplate2Component } from './kvm-deploy-vm/KvmDeployVm-CopyTemplate2';
import { KvmDeployVmSetUpIpName3Component } from './kvm-deploy-vm/KvmDeployVm-SetUpIpName3';
import { KvmDeployVmSetUpMasternode4Component } from './kvm-deploy-vm/KvmDeployVm-SetUpMasternode4';
import { KvmDeployVmBuildXmlVmConfig5Component } from './kvm-deploy-vm/KvmDeployVm-BuildXmlVmConfig5';
import { KvmDeployVmAddVmToKvm6Component } from './kvm-deploy-vm/KvmDeployVm-AddVmToKvm6';
import { KvmDeployVmAddVmToDb7Component } from './kvm-deploy-vm/KvmDeployVm-AddVmToDb7';
import { KvmDeployVmAddMasterNodeToDb8Component } from './kvm-deploy-vm/KvmDeployVm-AddMasterNodeToDb8';
import { KvmDiskOperationDeletePartitionFromServerComponent } from './kvm-disk-operation/KvmDiskOperation-DeletePartitionFromServer';
import { KvmDiskOperationDeletePartitionFromDBComponent } from './kvm-disk-operation/KvmDiskOperation-DeletePartitionFromDB';
import { KvmDiskOperationDeleteVolumeFromDBComponent } from './kvm-disk-operation/KvmDiskOperation-DeleteVolumeFromDB';
import { KvmDiskOperationAddPartitionToServerComponent } from './kvm-disk-operation/KvmDiskOperation-AddPartitionToServer';
import { KvmDiskOperationAddPartitionToDBComponent } from './kvm-disk-operation/KvmDiskOperation-AddPartitionToDB';
import { KvmDiskOperationFormatPartitionComponent } from './kvm-disk-operation/KvmDiskOperation-FormatPartition';
import { KvmDiskOperationListDevicePartitionComponent } from './kvm-disk-operation/KvmDiskOperation-ListDevicePartition';
import { KvmDiskOperationGetFreeDevicePartitionNameComponent } from './kvm-disk-operation/KvmDiskOperation-GetFreeDevicePartitionName';
import { KvmDiskOperationListDiskDeviceComponent } from './kvm-disk-operation/KvmDiskOperation-ListDiskDevice';
import { KvmDiskOperationListLvmDeviceComponent } from './kvm-disk-operation/KvmDiskOperation-ListLvmDevice';
import { KvmDiskOperationListLvmMemberComponent } from './kvm-disk-operation/KvmDiskOperation-ListLvmMember';
import { KvmDiskOperationUpdatePartitionInDBComponent } from './kvm-disk-operation/KvmDiskOperation-UpdatePartitionInDB';
import { KvmDiskOperationListDirectoryComponent } from './kvm-disk-operation/KvmDiskOperation-ListDirectory';
import { KvmDiskOperationGetServerPartitionsComponent } from './kvm-disk-operation/KvmDiskOperation-GetServerPartitions';
import { KvmDiskOperationGetFreeServerPartitionsComponent } from './kvm-disk-operation/KvmDiskOperation-GetFreeServerPartitions';
import { KvmDiskOperationAddKvmVolumeToServerComponent } from './kvm-disk-operation/KvmDiskOperation-AddKvmVolumeToServer';
import { KvmDiskOperationAddKvmVolumeToDbComponent } from './kvm-disk-operation/KvmDiskOperation-AddKvmVolumeToDb';
import { KvmDiskOperationSyncKvmVolumeComponent } from './kvm-disk-operation/KvmDiskOperation-SyncKvmVolume';
import { KvmDiskOperationKvmStorageListComponent } from './kvm-disk-operation/KvmDiskOperation-KvmStorageList';
import { KvmDiskOperationKvmVmPoolListComponent } from './kvm-disk-operation/KvmDiskOperation-KvmVmPoolList';
import { KvmInfoGetServerStorageDeviceComponent } from './kvm-info/KvmInfo-GetServerStorageDevice';
import { KvmInfoGetFreeIPComponent } from './kvm-info/KvmInfo-GetFreeIP';
import { KvmInfoGetFreeKvmVolumeComponent } from './kvm-info/KvmInfo-GetFreeKvmVolume';
import { KvmInfoGetKvmVolumeComponent } from './kvm-info/KvmInfo-GetKvmVolume';
import { KvmInfoServerInfoComponent } from './kvm-info/KvmInfo-ServerInfo';
import { KvmInfoNetworkInfoComponent } from './kvm-info/KvmInfo-NetworkInfo';
import { KvmInfoPoolInfoComponent } from './kvm-info/KvmInfo-PoolInfo';
import { KvmInfoStorageInfoComponent } from './kvm-info/KvmInfo-StorageInfo';
import { KvmInfoAccessInfoComponent } from './kvm-info/KvmInfo-AccessInfo';
import { KvmInfoGetKvmVlanComponent } from './kvm-info/KvmInfo-GetKvmVlan';
import { KvmInfoGetKvmNetworkInterfaceComponent } from './kvm-info/KvmInfo-GetKvmNetworkInterface';
import { KvmInfoGetKvmBridgeComponent } from './kvm-info/KvmInfo-GetKvmBridge';
import { KvmInfoGetKvmBridgePortComponent } from './kvm-info/KvmInfo-GetKvmBridgePort';
import { KvmInfoGetVlanSwitchComponent } from './kvm-info/KvmInfo-GetVlanSwitch';
import { KvmIpGetRuntimeBridgeListComponent } from './kvm-ip/KvmIp-GetRuntimeBridgeList';
import { KvmIpGetRuntimeBridgePortsComponent } from './kvm-ip/KvmIp-GetRuntimeBridgePorts';
import { KvmIpGetRuntimeRouteComponent } from './kvm-ip/KvmIp-GetRuntimeRoute';
import { KvmIpGetIpConfigComponent } from './kvm-ip/KvmIp-GetIpConfig';
import { KvmIpGetUfwRulesComponent } from './kvm-ip/KvmIp-GetUfwRules';
import { KvmIpGetRuntimeIpListComponent } from './kvm-ip/KvmIp-GetRuntimeIpList';
import { KvmOperationBashComponent } from './kvm-operation/KvmOperation-Bash';
import { KvmOperationDoBashComponent } from './kvm-operation/KvmOperation-DoBash';
import { KvmVmGetVmInfoComponent } from './kvm-vm/KvmVm-GetVmInfo';
import { KvmVmGetVmListComponent } from './kvm-vm/KvmVm-GetVmList';
import { KvmVmGetVmListInfoComponent } from './kvm-vm/KvmVm-GetVmListInfo';
import { KvmVmGetVmListRuntimeComponent } from './kvm-vm/KvmVm-GetVmListRuntime';
import { KvmVmDeleteVm1_FromServerComponent } from './kvm-vm/KvmVm-DeleteVm1_FromServer';
import { KvmVmDeleteVm2_FromDbComponent } from './kvm-vm/KvmVm-DeleteVm2_FromDb';
import { KvmVmDumpXmlVmComponent } from './kvm-vm/KvmVm-DumpXmlVm';
import { KvmVmListVmDiskByKvmComponent } from './kvm-vm/KvmVm-ListVmDiskByKvm';
import { KvmVmChangeSshVmIpDbComponent } from './kvm-vm/KvmVm-ChangeSshVmIpDb';
import { KvmVmUpdateVmInfoComponent } from './kvm-vm/KvmVm-UpdateVmInfo';
import { KvmVmUpdateAllVmInfoComponent } from './kvm-vm/KvmVm-UpdateAllVmInfo';
import { KvmVmBashForEachVmComponent } from './kvm-vm/KvmVm-BashForEachVm';
import { KvmVmLoadFileComponent } from './kvm-vm/KvmVm-LoadFile';
import { NotificationAddBashJobComponent } from './notification/Notification-AddBashJob';
import { NotificationBashJobFinishedComponent } from './notification/Notification-BashJobFinished';
import { NotificationFlushAllNotificationForOneUserComponent } from './notification/Notification-FlushAllNotificationForOneUser';
import { NotificationFlushNotificationComponent } from './notification/Notification-FlushNotification';
import { NotificationListNotificationCacheWaitingToSendToSubscriberComponent } from './notification/Notification-ListNotificationCacheWaitingToSendToSubscriber';
import { NotificationListAllClientConnectionToHubComponent } from './notification/Notification-ListAllClientConnectionToHub';
import { NotificationNotificationCacheStateComponent } from './notification/Notification-NotificationCacheState';
import { NotificationNotifyAllClientsSRVComponent } from './notification/Notification-NotifyAllClientsSRV';
import { NotificationNotifyOneClientSRVComponent } from './notification/Notification-NotifyOneClientSRV';
import { NotificationNotifyAllClientsTSTComponent } from './notification/Notification-NotifyAllClientsTST';
import { NotificationNotifyOneClientTSTComponent } from './notification/Notification-NotifyOneClientTST';
import { NotificationListAllDockerEventsConnectionToHubComponent } from './notification/Notification-ListAllDockerEventsConnectionToHub';
import { NotificationNotifyAllDockerEventsClientsTSTComponent } from './notification/Notification-NotifyAllDockerEventsClientsTST';
import { NotificationNotifyOneDockerEventsClientTSTComponent } from './notification/Notification-NotifyOneDockerEventsClientTST';
import { NotificationContainerStartComponent } from './notification/Notification-ContainerStart';
import { NotificationContainerStopComponent } from './notification/Notification-ContainerStop';
import { RegistryGetRegistryListComponent } from './registry/Registry-GetRegistryList';
import { RegistryGetRegistryReportFromDbComponent } from './registry/Registry-GetRegistryReportFromDb';
import { RegistryAddRegistryInfoToDbComponent } from './registry/Registry-AddRegistryInfoToDb';
import { RegistryGetRegistryImageListComponent } from './registry/Registry-GetRegistryImageList';
import { RegistryDeleteRegistryImageFromDbComponent } from './registry/Registry-DeleteRegistryImageFromDb';
import { RegistryGetRegistryRuntimeCatalogComponent } from './registry/Registry-GetRegistryRuntimeCatalog';
import { RegistryGetRegistryRuntimeTagListComponent } from './registry/Registry-GetRegistryRuntimeTagList';
import { RegistryGetRegistryRuntimeManifestAndDigestComponent } from './registry/Registry-GetRegistryRuntimeManifestAndDigest';
import { RegistryGetRegistryRuntimeFullContentComponent } from './registry/Registry-GetRegistryRuntimeFullContent';
import { RegistryUpdateRegistryDbFromRuntimeComponent } from './registry/Registry-UpdateRegistryDbFromRuntime';
import { RegistryAddNewRegistryServerToDbComponent } from './registry/Registry-AddNewRegistryServerToDb';
import { RegistryLoadRegistryImageToDbComponent } from './registry/Registry-LoadRegistryImageToDb';
import { UsersAuthenticateComponent } from './users/Users-Authenticate';
import { UsersGetAllComponent } from './users/Users-GetAll';
import { VmImageZipPartitionComponent } from './vm-image/VmImage-ZipPartition';
import { VmImageListPartitionImagesComponent } from './vm-image/VmImage-ListPartitionImages';
import { VmImageListPartitionImagesFromDBComponent } from './vm-image/VmImage-ListPartitionImagesFromDB';
import { VmImageSyncPartitionImagesComponent } from './vm-image/VmImage-SyncPartitionImages';
import { VmImageUnZipPartitionComponent } from './vm-image/VmImage-UnZipPartition';
import { VmMasternodeGetVmMasternodesComponent } from './vm-masternode/VmMasternode-GetVmMasternodes';
import { VmMasternodeUpdateVmMasternodeInfoComponent } from './vm-masternode/VmMasternode-UpdateVmMasternodeInfo';
import { VmMasternodeUpdateAllVmMasternodesInfoComponent } from './vm-masternode/VmMasternode-UpdateAllVmMasternodesInfo';
import { VmOperationBashComponent } from './vm-operation/VmOperation-Bash';
import { VmOperationBashByKvmComponent } from './vm-operation/VmOperation-BashByKvm';
import { VmOperationVmStartByKvmComponent } from './vm-operation/VmOperation-VmStartByKvm';
import { VmOperationVmStopByBashComponent } from './vm-operation/VmOperation-VmStopByBash';
import { VmOperationVmStopByKvmComponent } from './vm-operation/VmOperation-VmStopByKvm';
import { VmOperationVmRebootByBashComponent } from './vm-operation/VmOperation-VmRebootByBash';
import { VmOperationVmRebootByKvmComponent } from './vm-operation/VmOperation-VmRebootByKvm';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    WelcomeComponent,
    AesComponent,
    ContainerComponent,
    DbMasternodeComponent,
    DockerComponent,
    KvmDeployVmComponent,
    KvmDiskOperationComponent,
    KvmInfoComponent,
    KvmIpComponent,
    KvmOperationComponent,
    KvmVmComponent,
    NotificationComponent,
    RegistryComponent,
    UsersComponent,
    VmImageComponent,
    VmMasternodeComponent,
    VmOperationComponent,
    DatacenterComponent,
    LoginComponent,
    AesNetCryptComponent,                                                   /* Aes */
    AesNetDeCryptComponent,                                                 /* Aes */
    AesSqlCryptComponent,                                                   /* Aes */
    AesSqlDeCryptComponent,                                                 /* Aes */
    AesUpdateDecryptedPassComponent,                                        /* Aes */
    AesCheckDecryptPassComponent,                                           /* Aes */
    AesGetRandomPasswordComponent,                                          /* Aes */
    AesGetRandomNameComponent,                                              /* Aes */
    ContainerStartContainerRawComponent,                                    /* Container */
    ContainerStartMasterNodeContainerByBashComponent,                       /* Container */
    ContainerCreateContainerByDockerRawComponent,                           /* Container */
    ContainerCreateContainerByDockerComponent,                              /* Container */
    ContainerStartContainerByDockerComponent,                               /* Container */
    ContainerStopContainerByDockerComponent,                                /* Container */
    ContainerRestartContainerByDockerComponent,                             /* Container */
    ContainerRemoveContainerByDockerComponent,                              /* Container */
    ContainerReadContainerLogByDockerComponent,                             /* Container */
    ContainerListAllContainersByDockerComponent,                            /* Container */
    ContainerListRunningContainersByDockerComponent,                        /* Container */
    ContainerInspectContainerByDockerComponent,                             /* Container */
    ContainerListContainerProcessesByDockerComponent,                       /* Container */
    ContainerListImagesByDockerComponent,                                   /* Container */
    ContainerListVolumesByDockerComponent,                                  /* Container */
    ContainerAttachToContainerByDockerComponent,                            /* Container */
    DatacenterAddServerComponent,                                           /* Datacenter */
    DatacenterDelServerComponent,                                           /* Datacenter */
    DatacenterUpdServerComponent,                                           /* Datacenter */
    DbMasternodeAddMasternodeInfoComponent,                                 /* DbMasternode */
    DbMasternodeDelMasternodeInfoComponent,                                 /* DbMasternode */
    DbMasternodeGetMasternodeInfoComponent,                                 /* DbMasternode */
    DockerGetDockerHostListComponent,                                       /* Docker */
    DockerGetDockerHubDbInfoComponent,                                      /* Docker */
    DockerUpdateDockerHubDbConfigInfoComponent,                             /* Docker */
    DockerGetDockerHubRuntimeInfoComponent,                                 /* Docker */
    DockerUpdateDockerHubInfoComponent,                                     /* Docker */
    DockerGetDockerServiceLogComponent,                                     /* Docker */
    DockerGetDockerInfoComponent,                                           /* Docker */
    DockerGetDockerEventsComponent,                                         /* Docker */
    DockerDeleteDockerHubFromDbComponent,                                   /* Docker */
    DockerAddDockerHubInfoToDbComponent,                                    /* Docker */
    KvmDeployVmDeployVMComponent,                                           /* KvmDeployVm */
    KvmDeployVmAbortDeployVMComponent,                                      /* KvmDeployVm */
    KvmDeployVmGetCurrentDeploymentLogComponent,                            /* KvmDeployVm */
    KvmDeployVmGetCurrentDeploymentStateComponent,                          /* KvmDeployVm */
    KvmDeployVmSelectPartitionToDeploy1Component,                           /* KvmDeployVm */
    KvmDeployVmAllocatePartition2Component,                                 /* KvmDeployVm */
    KvmDeployVmCopyTemplate2Component,                                      /* KvmDeployVm */
    KvmDeployVmSetUpIpName3Component,                                       /* KvmDeployVm */
    KvmDeployVmSetUpMasternode4Component,                                   /* KvmDeployVm */
    KvmDeployVmBuildXmlVmConfig5Component,                                  /* KvmDeployVm */
    KvmDeployVmAddVmToKvm6Component,                                        /* KvmDeployVm */
    KvmDeployVmAddVmToDb7Component,                                         /* KvmDeployVm */
    KvmDeployVmAddMasterNodeToDb8Component,                                 /* KvmDeployVm */
    KvmDiskOperationDeletePartitionFromServerComponent,                     /* KvmDiskOperation */
    KvmDiskOperationDeletePartitionFromDBComponent,                         /* KvmDiskOperation */
    KvmDiskOperationDeleteVolumeFromDBComponent,                            /* KvmDiskOperation */
    KvmDiskOperationAddPartitionToServerComponent,                          /* KvmDiskOperation */
    KvmDiskOperationAddPartitionToDBComponent,                              /* KvmDiskOperation */
    KvmDiskOperationFormatPartitionComponent,                               /* KvmDiskOperation */
    KvmDiskOperationListDevicePartitionComponent,                           /* KvmDiskOperation */
    KvmDiskOperationGetFreeDevicePartitionNameComponent,                    /* KvmDiskOperation */
    KvmDiskOperationListDiskDeviceComponent,                                /* KvmDiskOperation */
    KvmDiskOperationListLvmDeviceComponent,                                 /* KvmDiskOperation */
    KvmDiskOperationListLvmMemberComponent,                                 /* KvmDiskOperation */
    KvmDiskOperationUpdatePartitionInDBComponent,                           /* KvmDiskOperation */
    KvmDiskOperationListDirectoryComponent,                                 /* KvmDiskOperation */
    KvmDiskOperationGetServerPartitionsComponent,                           /* KvmDiskOperation */
    KvmDiskOperationGetFreeServerPartitionsComponent,                       /* KvmDiskOperation */
    KvmDiskOperationAddKvmVolumeToServerComponent,                          /* KvmDiskOperation */
    KvmDiskOperationAddKvmVolumeToDbComponent,                              /* KvmDiskOperation */
    KvmDiskOperationSyncKvmVolumeComponent,                                 /* KvmDiskOperation */
    KvmDiskOperationKvmStorageListComponent,                                /* KvmDiskOperation */
    KvmDiskOperationKvmVmPoolListComponent,                                 /* KvmDiskOperation */
    KvmInfoGetServerStorageDeviceComponent,                                 /* KvmInfo */
    KvmInfoGetFreeIPComponent,                                              /* KvmInfo */
    KvmInfoGetFreeKvmVolumeComponent,                                       /* KvmInfo */
    KvmInfoGetKvmVolumeComponent,                                           /* KvmInfo */
    KvmInfoServerInfoComponent,                                             /* KvmInfo */
    KvmInfoNetworkInfoComponent,                                            /* KvmInfo */
    KvmInfoPoolInfoComponent,                                               /* KvmInfo */
    KvmInfoStorageInfoComponent,                                            /* KvmInfo */
    KvmInfoAccessInfoComponent,                                             /* KvmInfo */
    KvmInfoGetKvmVlanComponent,                                             /* KvmInfo */
    KvmInfoGetKvmNetworkInterfaceComponent,                                 /* KvmInfo */
    KvmInfoGetKvmBridgeComponent,                                           /* KvmInfo */
    KvmInfoGetKvmBridgePortComponent,                                       /* KvmInfo */
    KvmInfoGetVlanSwitchComponent,                                          /* KvmInfo */
    KvmIpGetRuntimeBridgeListComponent,                                     /* KvmIp */
    KvmIpGetRuntimeBridgePortsComponent,                                    /* KvmIp */
    KvmIpGetRuntimeRouteComponent,                                          /* KvmIp */
    KvmIpGetIpConfigComponent,                                              /* KvmIp */
    KvmIpGetUfwRulesComponent,                                              /* KvmIp */
    KvmIpGetRuntimeIpListComponent,                                         /* KvmIp */
    KvmOperationBashComponent,                                              /* KvmOperation */
    KvmOperationDoBashComponent,                                            /* KvmOperation */
    KvmVmGetVmInfoComponent,                                                /* KvmVm */
    KvmVmGetVmListComponent,                                                /* KvmVm */
    KvmVmGetVmListInfoComponent,                                            /* KvmVm */
    KvmVmGetVmListRuntimeComponent,                                         /* KvmVm */
    KvmVmDeleteVm1_FromServerComponent,                                     /* KvmVm */
    KvmVmDeleteVm2_FromDbComponent,                                         /* KvmVm */
    KvmVmDumpXmlVmComponent,                                                /* KvmVm */
    KvmVmListVmDiskByKvmComponent,                                          /* KvmVm */
    KvmVmChangeSshVmIpDbComponent,                                          /* KvmVm */
    KvmVmUpdateVmInfoComponent,                                             /* KvmVm */
    KvmVmUpdateAllVmInfoComponent,                                          /* KvmVm */
    KvmVmBashForEachVmComponent,                                            /* KvmVm */
    KvmVmLoadFileComponent,                                                 /* KvmVm */
    NotificationAddBashJobComponent,                                        /* Notification */
    NotificationBashJobFinishedComponent,                                   /* Notification */
    NotificationFlushAllNotificationForOneUserComponent,                    /* Notification */
    NotificationFlushNotificationComponent,                                 /* Notification */
    NotificationListNotificationCacheWaitingToSendToSubscriberComponent,    /* Notification */
    NotificationListAllClientConnectionToHubComponent,                      /* Notification */
    NotificationNotificationCacheStateComponent,                            /* Notification */
    NotificationNotifyAllClientsSRVComponent,                               /* Notification */
    NotificationNotifyOneClientSRVComponent,                                /* Notification */
    NotificationNotifyAllClientsTSTComponent,                               /* Notification */
    NotificationNotifyOneClientTSTComponent,                                /* Notification */
    NotificationListAllDockerEventsConnectionToHubComponent,                /* Notification */
    NotificationNotifyAllDockerEventsClientsTSTComponent,                   /* Notification */
    NotificationNotifyOneDockerEventsClientTSTComponent,                    /* Notification */
    NotificationContainerStartComponent,                                    /* Notification */
    NotificationContainerStopComponent,                                     /* Notification */
    RegistryGetRegistryListComponent,                                       /* Registry */
    RegistryGetRegistryReportFromDbComponent,                               /* Registry */
    RegistryAddRegistryInfoToDbComponent,                                   /* Registry */
    RegistryGetRegistryImageListComponent,                                  /* Registry */
    RegistryDeleteRegistryImageFromDbComponent,                             /* Registry */
    RegistryGetRegistryRuntimeCatalogComponent,                             /* Registry */
    RegistryGetRegistryRuntimeTagListComponent,                             /* Registry */
    RegistryGetRegistryRuntimeManifestAndDigestComponent,                   /* Registry */
    RegistryGetRegistryRuntimeFullContentComponent,                         /* Registry */
    RegistryUpdateRegistryDbFromRuntimeComponent,                           /* Registry */
    RegistryAddNewRegistryServerToDbComponent,                              /* Registry */
    RegistryLoadRegistryImageToDbComponent,                                 /* Registry */
    UsersAuthenticateComponent,                                             /* Users */
    UsersGetAllComponent,                                                   /* Users */
    VmImageZipPartitionComponent,                                           /* VmImage */
    VmImageListPartitionImagesComponent,                                    /* VmImage */
    VmImageListPartitionImagesFromDBComponent,                              /* VmImage */
    VmImageSyncPartitionImagesComponent,                                    /* VmImage */
    VmImageUnZipPartitionComponent,                                         /* VmImage */
    VmMasternodeGetVmMasternodesComponent,                                  /* VmMasternode */
    VmMasternodeUpdateVmMasternodeInfoComponent,                            /* VmMasternode */
    VmMasternodeUpdateAllVmMasternodesInfoComponent,                        /* VmMasternode */
    VmOperationBashComponent,                                               /* VmOperation */
    VmOperationBashByKvmComponent,                                          /* VmOperation */
    VmOperationVmStartByKvmComponent,                                       /* VmOperation */
    VmOperationVmStopByBashComponent,                                       /* VmOperation */
    VmOperationVmStopByKvmComponent,                                        /* VmOperation */
    VmOperationVmRebootByBashComponent,                                     /* VmOperation */
    VmOperationVmRebootByKvmComponent,                                      /* VmOperation */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

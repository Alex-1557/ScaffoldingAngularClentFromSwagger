import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AesComponent } from './aes/aes.component';
import { DatacenterComponent } from './datacenter/datacenter.component';
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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
  { path: 'aes', component: AesComponent },
  { path: 'datacenter', component: DatacenterComponent },
  { path: 'container', component: ContainerComponent },
  { path: 'db-masternode', component: DbMasternodeComponent },
  { path: 'docker', component: DockerComponent },
  { path: 'kvm-deploy-vm', component: KvmDeployVmComponent},
  { path: 'kvm-disk-operation', component: KvmDiskOperationComponent},
  { path: 'kvm-info', component: KvmInfoComponent},
  { path: 'kvm-ip', component: KvmIpComponent},
  { path: 'kvm-operation', component: KvmOperationComponent},
  { path: 'kvm-vm', component: KvmVmComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'registry', component: RegistryComponent},
  { path: 'users', component: UsersComponent},
  { path: 'vm-image', component: VmImageComponent},
  { path: 'vm-masternode', component: VmMasternodeComponent},
  { path: 'vm-operation', component: VmOperationComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

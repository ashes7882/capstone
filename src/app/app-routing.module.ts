import { SettingsComponent } from './settings/settings.component';
import { SavingsComponent } from './savings/savings.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestsComponent } from './requests/requests.component';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'savings', component: SavingsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'requests', component: RequestsComponent},
  {path: 'transfers', component: TransfersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

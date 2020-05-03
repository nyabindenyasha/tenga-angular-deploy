import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { GreensModuleComponent } from './components/greens-module/greens-module.component';
import { GreensHomeComponent } from './components/greens-module/greens-home/greens-home.component';
import { OkModuleComponent } from './components/ok-module/ok-module.component';
import { ChoppiesModuleComponent } from './components/choppies-module/choppies-module.component';
import { SparModuleComponent } from './components/spar-module/spar-module.component';
import { PickNPayModuleComponent } from './components/pick-n-pay-module/pick-n-pay-module.component';
import { ChoppiesHomeComponent } from './components/choppies-module/choppies-home/choppies-home.component';
import { SparHomeComponent } from './components/spar-module/spar-home/spar-home.component';
import { OkHomeComponent } from './components/ok-module/ok-home/ok-home.component';
import { ActorNestedComponent } from './components/trial/actor-nested/actor-nested.component';

export const Approutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: PaymentDetailsComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'home', component: ActorNestedComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'getting-started', component: GettingStartedComponent },


  {
    path: 'greens', component: GreensModuleComponent, children: [
      { path: '', component: GreensHomeComponent },
    ]
  },

  {
    path: 'choppies', component: ChoppiesModuleComponent, children: [
      { path: '', component: ChoppiesHomeComponent },
    ]
  },

  {
    path: 'spar', component: SparModuleComponent, children: [
      { path: '', component: SparHomeComponent },
    ]
  },

  {
    path: 'ok', component: OkModuleComponent, children: [
      { path: '', component: OkHomeComponent },
    ]
  },

  
  {
    path: 'pnp', component: PickNPayModuleComponent, children: [
      { path: '', component: ActorNestedComponent },
    ]
  }

];
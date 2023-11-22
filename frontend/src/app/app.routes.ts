import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CharacterListComponent } from './core/components/character-list/character-list.component';
import { CampagnListComponent } from './core/components/campagn-list/campagn-list.component';
import { MapComponent } from './core/components/map/map.component';
import { CharacterCreateComponent } from './core/components/character-create/character-create.component';
import { CharacterDetailsComponent } from './core/components/character-details/character-details.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'create-character', component: CharacterCreateComponent },
  { path: 'characters/:id', component: CharacterDetailsComponent },
  { path: 'campagns', component: CampagnListComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
